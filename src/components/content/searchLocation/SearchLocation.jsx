import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
export default function SearchLocation({results, handleInputChange}) {
    // const [filterSearch, setFilterSearch]= useState("")    
    console.log(results)
    // const handleInputChange = event => {
        
    //     const value = event.target.value
    //     setFilterSearch(value)
    //     console.log(filterSearch)
    //     console.log(value)
        
    //     // setCity(event.target.value);
    //   };
  return (
    <>
    <form>
        <div>
            <label htmlFor="name" className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900">
            Please confirm the city's name.
            </label>
            <div className="mt-2">
                <input 
                    type="text"
                    name="location"
                    // value={filterSearch}
                    onChange={handleInputChange}
                    className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter City Name!"
                />
       
            </div>
        </div>
        </form>
        {results.map((restaurant, i)=>{
            return (<p key={i}>{restaurant.name}</p>)
        })}
        
       </>
  );
}