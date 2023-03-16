
const items = [
    { id: 1},
    // More items...
  ]
  
  export default function Example({location}) {
    return (
      <ul role="list" className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
<h2>Bronze</h2>  
<h5>{location.location}</h5>
        </li>
        ))}
      </ul>
    )
  }
  

//search for artist

//random artist 

// fetch gig information 

//date 

// new component resturant fetch 

