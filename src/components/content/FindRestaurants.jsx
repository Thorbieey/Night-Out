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
                <li key={item.id} className="overflow-hidden bg-white mt-5 mr-10 px-4 py-4 shadow sm:rounded-md sm:px-6">
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
                            <div className="relative overflow-hidden rounded-lg lg:h-96">
                            <div className="absolute inset-0">
                                <img
                                    src=""
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
                            <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
                            <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
                                <div>
                                    <h2  className="text-xl font-bold text-white"></h2>
                                    <h5 className="text-xl font-bold text-white"> </h5>
                                    <h6 className="text-xl font-bold text-white"> </h6>
                                    <h6 className="text-xl font-bold text-white"></h6>
                                    <a className="rounded-full bg-indigo-600 py-1 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="" role="button" target="_blank" rel="noreferrer">Book Now</a>
                                    <p className="mt-1 text-sm text-gray-300"> Upgrade your desk with objects that keep you organized and clear-minded.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}