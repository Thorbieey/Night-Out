import { useEffect, useState } from 'react'
import Restaurant from './Restaurant'

const items = [
    { id: 1},
    { id: 2},
    // More items...
  ]
export default function FindRestaurants() {
    const [city, setCity] = useState("");
    const [click, setClick] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!city) {
          return;
        }
    
        Restaurant.searchLocation(city)
          .then(res => {
            console.log(res)
            
          })
    }, [city]);
    
    return (
        <div>
            <ul role="list" className="space-y-3">
                {items.map((item) => (
                <li key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                    {/* Your content */}
                </li>
                ))}
            </ul>
        </div>
    )
}