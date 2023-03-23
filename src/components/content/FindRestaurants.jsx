import { useEffect, useState } from 'react'
import Restaurant from './Restaurant'
import SearchLocation from './searchLocation/SearchLocation'

export default function FindRestaurants() {
    const [city, setCity] = useState("birmingham");
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
            console.log(restaurants)
            setResultsData([...restaurants])
        }
        getRestaurants();     
    }, [city]);

 
    
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h5> Where are we dining tonight?</h5>
            <SearchLocation
           
            results={resultsData}
            />
        </div>
    )
}