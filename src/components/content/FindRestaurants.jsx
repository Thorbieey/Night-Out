import { useEffect, useState } from 'react'
import Restaurant from './Restaurant'

const items = [
    { id: 1},
    { id: 2},
    // More items...
  ]
export default function FindRestaurants() {
    const [city, setCity] = useState("birmingham");
    const [click, setClick] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!city) {
            console.log("no city")
          return;
        }

        async function getRestaurants(){
            let restaurants = await Restaurant.searchLocation(city)
            console.log(restaurants)

        }
        getRestaurants();
        const handleInputChange = event => {
            setCity(event.target.value);
          };
        
        
          
    }, [city]);
    
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h3>Step 1</h3>
            <h5> Pick Your Artist</h5>
            <div>
                <label htmlFor="name" className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900">
                Artist
                </label>
                <div className="mt-2">
                    <input 
                        onChange = {handleInputChange}
                        type="text"
                        name="location"
                        id="location-1"
                        className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter City Name!"
                    />
                    <button
                        type="button" 
                        onClick={handleFormSubmit}
                        className="rounded-full bg-indigo-600 py-1.5 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}