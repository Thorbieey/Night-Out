import React from 'react';

function Feedback(){
    
    return (
        <div className="feedback-form">
        <h1 className="headerFont">Feedback Form</h1>
    
        <div class="create-blog content">
            <form action="/feedback" method="POST">
                <input type="text" class="input-box" id="title" name="title" placeholder="Your title here..." required />
                <input type="text" class="input-box" id="snippet" name="snippet" placeholder="A snippet of your feedback here..." required />
                <textarea id="body" class="feedback-input-box" placeholder="Your feedback here..." name="body"></textarea>
                <button className="btn custom-btn">Submit</button>
            </form>
        </div>
    </div>
    );
}

export default Feedback;