import { useState } from "react"
import PackageBronze from "./PackageBronze"
import PackageSilver from "./PackageSilver"
import PackageGold from "./PackageGold"


const selections = [
    {
      name: 'Bronze Package',
      des: 'Live gig + restaurant booking',
      selection: 'Book a Gig',
      selection2: 'Book a Restaurant',
      imageUrl:
        '/assets/images/background-images/Restaurant3.png',
     
    },
    {
      name: 'Silver Package',
      des: 'Live gig + accommodation booking',
      selection: 'Book a Gig',
      selection2: 'Book Accommodation',
      imageUrl:
        '/assets/images/background-images/Hotel2.png',
     
    },
    {
      name: 'Gold Package',
      des: 'Live gig + restaurant + accommodation booking',
      selection: 'Book a Gig',
      selection2: 'Book Accommodation',
      selection3: "Book a Restaurant",
      imageUrl:
        '/assets/images/background-images/band5.png',
     
    },
    // More people...
  ]
  
  
  export default function Selector() {
    const [selection, setSelections] = useState("")

    if (selection === "Bronze Package") { 
  return (<PackageBronze/>) 
 
} if (selection === "Silver Package") {
  return (<PackageSilver/>) 

}
if (selection === "Gold Package") {
  return (<PackageGold/>) 

}
  

    return (
      <>
      
      <div className="py-24 sm:py-32">
        

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-amber-100 sm:text-4xl text-center">Build Your Night Out Package</h2>
            <p className="mt-6 text-lg leading-8 text-amber-100 text-center">
              Now you've chosen where you would like your night out to be, it's time to select the package that suits you.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {selections.map((selections,i) => (
              <li key={i} className="mt-5 mb-2 flex flex-col items-center bg-amber-100 rounded shadow md p-2">
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={selections.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-700 text-center">{selections.name}</h3>
                <h5 className="mt-6 text-base font-semibold leading-8 tracking-tight text-gray-600 text-center">{selections.des}</h5>
             
                
            
                      
                    <button
               type="button" onClick={function Select (event) {
                event.preventDefault()
                setSelections(selections.name)
                // console.log(selections.name)
               }}
               className="mt-5 mb-2 rounded-full bg-gray-600 py-2 px-3.5 text-sm uppercase font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
               Book now
             </button>
                  
             
              </li>
              
              
            ))}
          </ul>
        </div>
      </div>
      </>
    )
  }
  