import { useState } from "react"
import TicketMaster from "./TicketMaster"

export default function Example() {

  const [artist, setArtist] = useState("")
  const [click, setClick] = useState("")

  var retrievedObject = localStorage.getItem('cityCode');
  var parsedObject = JSON.parse(retrievedObject);

  // console.log(artist)
  if (click === "click") {
    return (<TicketMaster artist ={[{artist:artist, code: parsedObject }]}/>);
  }
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 my-8 container text-center bg-white rounded">
      <h2 className="text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl text-center">Step 1: Pick Your Artist</h2>
      <div>
        <label htmlFor="name" className="ml-px block pl-4 text-lg font-medium leading-6 text-gray-900">
          Artist
        </label>
        <div className="mt-2">
          <input 
            onChange={function Art(event) {
              event.preventDefault();
              event.stopPropagation();
              setArtist(event.target.value);
            }}
            type="text"
            name="artist"
            id="artist"
            className="text-center block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter artist's name"
          />
          <button
            type="button" 
            onClick={function submit() {
              setClick("click")        
            }}
            className="rounded-full bg-gray-600 m-3 py-2 px-3.5 text-sm uppercase font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Submit
          </button>
          </div>
        </div>
      </div>
  );
}