import React from "react";

const Restaurants = [
    { 
        id: 1,
        name: "iKrave",
        address: "Birmingham",
        imgUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        rating: "5",
    },
    { 
        id: 2,
        name: "Bungalow",
        address: "Lagos",
        imgUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: "4.7",
    },
    // More items...
]

export default function FavRestaurants() {
  return (
    <div className="container">
        <h1 className=" text-amber-100 font-extrabold text-5xl">
            Favourite Restaurants
        </h1>
        <div className="container  p-0">
            <ul role="list" className="space-y-3 bg-amber-100 m-2">
                {Restaurants.map((Restaurant) => (
                <li key={Restaurant.id} className="overflow-hidden px-4 py-4 shadow sm:rounded-md sm:px-6">
                    <h1 className="m-0 py-1 text-2xl font-semibold leading-8 tracking-tight text-indigo-900 text-center uppercase">
                            {Restaurant.name}
                            <span className="ml-3 text-xl font-bold leading-8 tracking-tight text-red-700">{Restaurant.rating}</span>
                    </h1>
                    <img src={Restaurant.imgUrl} alt="restaurant" className="aspect-[3/2] w-full rounded-2xl object-cover"/>
                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-indigo-900 text-center">{Restaurant.address}</p>
                </li>
                ))}
            </ul>
        </div>
    </div>
    );
}
