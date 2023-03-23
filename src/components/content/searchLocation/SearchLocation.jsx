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
        <div className="container text-center">
            <label htmlFor="name" className="ml-px block pl-4 text-2xl font-medium leading-6 text-white-900">
            Please confirm the city's name.
            </label>
            <div className="mt-2">
                <input 
                    type="text"
                    name="location"
                    // value={filterSearch}
                    onChange={handleInputChange}
                    className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 m-3 shadow-indigo-500/50 shadow-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter City Name!"
                />
       
            </div>
        </div>
        </form>
        {results.map((restaurant, i)=>{
            return (
                <div key={i} className="container text-center bg-white py-3 mt-5"> 
                    <h2  className="text-indigo-900 text-5xl font-bold tracking-tight">{restaurant.name}</h2>
                    <img className="w-70" src={restaurant.mainPhotoSrc} alt="{restaurant.name}" />
                    <p className="text-indigo-900 text-2xl font-bold">Address: {restaurant.address.street}, {restaurant.address.locality}, {restaurant.address.country}. {restaurant.address.postalCode}</p>
                    <p className="text-indigo-900 text-2xl font-bold">Cuisine: {restaurant.servesCuisine}</p>
                    <p className="text-indigo-900 text-2xl font-bold">The Fork Rating: {restaurant.aggregateRatings.thefork.ratingValue}</p>
                    <p className="text-indigo-900 text-2xl font-bold">Offer: {restaurant.bestOffer.name}</p>
                </div>
                )
        })}
        
       </>
  );
}