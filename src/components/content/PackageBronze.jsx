import { useState } from "react"

export default function Example() {

const [artist, setArtist] = useState

function Submit () {
  
const artistName = artist 
const cityCode = localStorage.getItem("citycode")
console.log(artistName)
console.log(cityCode)

fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artist}&dmaId=${cityCode}&apikey=I71rSGwulwznNcHFcIbcGrwcHuC0T9S6`)
    .then(response => response.json())
    .then (function(response){
console.log(response._embedded.events[0].url)})


return (<> 





</>)





}





  
  return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
<h3>Step 1</h3>
<h5> Pick Your Artist</h5>

    <div>
      <label htmlFor="name" className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900">
        Artist
      </label>
      <div className="mt-2">
        <input onChange={function email(event) {
                        event.preventDefault()
                        event.stopPropagation()
                     setArtist(event.target.value)
        }}
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Jane Smith"
          
        />
        <button
        type="button" onClick={Submit}
        className="rounded-full bg-indigo-600 py-1.5 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </button>
      </div>
    </div>
  </div>
}
