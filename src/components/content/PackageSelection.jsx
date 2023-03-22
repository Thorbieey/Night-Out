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
      des: 'Live gig + restaurant booking + accommodation booking + travel information',
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
            <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl text-center">Build Your Night Out Package</h2>
            <p className="mt-6 text-lg leading-8 text-white-600 text-center">
              Now you've chosen where you would like your night out to be, it's time to select the package that suits you.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {selections.map((selections,i) => (
              <li key={i} className="bg-white rounded shadow md p-2">
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={selections.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-700 text-center">{selections.name}</h3>
                <h5 className="mt-6 text-base font-semibold leading-8 tracking-tight text-gray-600 text-center">{selections.des}</h5>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                  </li>
                  <li>
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    <button
               type="button" onClick={function Select (event) {
                event.preventDefault()
                setSelections(selections.name)
                console.log(selections.name)
               }}
               className="rounded-full bg-gray-600 py-2 px-3.5 text-sm uppercase font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
               Book now
             </button>
                  </li>
              </ul>
              </li>
              
              
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-full bg-no-repeat bg-cover"> 
      <div style={{
        width: '1500px',
        height: '500px',
        backgroundSize:'cover',
        backgroundImage: 'url(" /assets/background-images/Band3.png")'
      }}></div>
      </div>
      </>
    )
  }
  