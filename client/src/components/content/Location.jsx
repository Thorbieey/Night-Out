import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState, useEffect  } from 'react'
import PackageSelection from './PackageSelection'


const locations = [
  {
    name: 'London',
    code:  "602",
    codeBook: "2601889",
    icon: CloudArrowUpIcon,
    imageURL: '/assets/locations/London.png',
  },
  {
    name: 'South',
    code:  "603",
    codeBook: "2590884",
    icon: LockClosedIcon,
    imageURL: '/assets/locations/South.png',


  },
  {
    name: 'Wales and North West',
    code:  "605",
    codeBook: "2602512",
    icon: ServerIcon,
    imageURL: '/assets/locations/NorthWest.png',
  },
  {
    name: 'North and North East',
    code:  "606",
    codeBook: "2603966",
    icon: CloudArrowUpIcon,
    imageURL: '/assets/locations/NorthEast.png',
  },
  {
    name: 'Midlands and Central',
    code:  "604",
    codeBook: "2589989",
    icon: LockClosedIcon,
    imageURL: '/assets/locations/Midlands.png',
  },
  {
    name: 'Scotland',
    code:  "607",
    codeBook: "2597039",
    icon: ServerIcon,
    imageURL: '/assets/locations/Scotland.png',
  },
  {
    name: 'Northern Ireland.',
    code:  "609",
    codeBook: "2589607",
    icon: ServerIcon,
    imageURL: '/assets/locations/NIreland.png',
  },
  {
    name: 'All of Ireland',
    code:  "608",
    codeBook: "1502554",
    icon: ServerIcon,
    imageURL: '/assets/locations/Ireland.png',
  },

]

export default function Example() {
  const [location, setLocation] = useState("")
  const [code, setCode] = useState("")
  const [bookCode, setBook] = useState("")
const [click, setClick] = useState("")




if (click === "click") {
  console.log(code)
  localStorage.setItem("cityCode", JSON.stringify(code));
  localStorage.setItem("bookCode", JSON.stringify(bookCode));

  console.log(bookCode)
  return <> <PackageSelection/> </>
}

  return ( 
    <body>
    
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Pick Your Location</h2>

              
              
             
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {locations.map((locations) => (
                  
                  <div key={locations.name} className="relative pl-9">
                    <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={locations.imageURL} alt="" />
                    <h2></h2>
                    
                   <button
          type="button" onClick={function location(event) {
            event.preventDefault()
            setLocation(locations.name)
            setCode (locations.code)
            setBook (locations.codeBook)
            setClick("click")
          }}
          className="rounded-full bg-gray-600 py-2 px-3.5 text-sm uppercase font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {locations.name}
        </button>
                  </div>
                ))}
              </dl>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <div className="w-full h-full bg-no-repeat bg-cover"> 
      <div style={{
        width: '1500px',
        height: '500px',
        backgroundSize:'cover',
        backgroundImage: 'url(" /assets/background-images/Band2.png")'
      }}></div>
      </div>
    </body>
  )
}
