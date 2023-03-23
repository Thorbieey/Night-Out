import { useEffect, useState } from 'react'
import Restaurant from './Restaurant'
import SearchLocation from './searchLocation/SearchLocation'

export default function FindRestaurants() {
    const [city, setCity] = useState("london");
    const [resultsData, setResultsData] = useState([]);

    // const [click, setClick] = useState("");
    // const [error, setError] = useState("");

    useEffect(() => {
        if (!city) {
            console.log("no city")
          return;
        }

        async function getRestaurants(){
            let restaurants = await Restaurant.searchLocation(city)
            // console.log(restaurants)
            setResultsData([...restaurants])
        }
        getRestaurants();     
    }, [city]);

 
    const handleInputChange = event => {
        setCity(event.target.value);
      };
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="m-8 text-5xl font-bold tracking-tight text-amber-100 sm:text-4xl text-center">Where are we dining tonight?</h2>
            <SearchLocation
            handleInputChange={handleInputChange}
            results={resultsData}
            />
        </div>
    )
}