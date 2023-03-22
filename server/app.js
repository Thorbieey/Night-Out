const express = require("express");
const mongoose = require("mongoose");
const Feedback = require("./models/feedback");

const app = express();

const dbaccess = "mongodb+srv://bertiemoogle2:!KlAnGBertie1964@cluster0.9iubflu.mongodb.net/nightout?retryWrites=true&w=majority";
mongoose.connect(dbaccess)
    .then((result) => app.listen(3001))
    .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", "pages");
console.log("test")
app.use(express.urlencoded({ extended: true }));

app.get("/index", (req, res) => {
    res.redirect("/feedback");
});

app.get("/feedback", (req, res) => {
    Feedback.find().sort({ createdAt: -1 })
    .then((result) => {
        console.log(result)
        // res.render("index", { title: "All Blogs", feedback: result })
    })
    .catch((err) => {
        console.log(err);
    })
});

app.post("/feedback", (req, res) => {
    const feedback = new Feedback(req.body);
    feedback.save()
        .then((result) => {
            res.redirect("/feedback");
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get("/feedback/:id", (req, res) => {
    const id = req.params.id.trim();
    Feedback.findById(id)
    .then(result => {
        // res.render("details", { feedback: result, title: "Feedback Details" });
        console.log(id);
    })
    .catch(err => {
        console.log(err);
    });
})

app.delete("/feedback/:id", (req, res) => {
    const id = req.params.id;
    Feedback.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: "/feedback" })
    })
    .catch(err => {
        console.log(err)
    });
})

app.get("/create", (req, res) => {
    // res.render("create", { title: "Create" });
})

app.use((req, res) => {
    // res.status(404).render("404", { title: "404" });
})