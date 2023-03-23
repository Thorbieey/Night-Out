import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState, useEffect  } from 'react'
import PackageSelection from './PackageSelection'


const locations = [
  {
    name: 'London',
    code:  "602",
    codeBook: "2601889",
    icon: CloudArrowUpIcon,
    imageURL: '/assets/images/locations/London.png',
  },
  {
    name: 'South',
    code:  "603",
    codeBook: "2590884",
    icon: LockClosedIcon,
    imageURL: '/assets/images/locations/South.png',


  },
  {
    name: 'Wales and North West',
    code:  "605",
    codeBook: "2602512",
    icon: ServerIcon,
    imageURL: '/assets/images/locations/NorthWest.png',
  },
  {
    name: 'North and North East',
    code:  "606",
    codeBook: "2603966",
    icon: CloudArrowUpIcon,
    imageURL: '/assets/images/locations/NorthEast.png',
  },
  {
    name: 'Midlands and Central',
    code:  "604",
    codeBook: "2589989",
    icon: LockClosedIcon,
    imageURL: '/assets/images/locations/Midlands.png',
  },
  {
    name: 'Scotland',
    code:  "607",
    codeBook: "2597039",
    icon: ServerIcon,
    imageURL: '/assets/images/locations/Scotland.png',
  },
  {
    name: 'Northern Ireland.',
    code:  "609",
    codeBook: "2589607",
    icon: ServerIcon,
    imageURL: '/assets/images/locations/NIreland.png',
  },
  {
    name: 'All of Ireland',
    code:  "608",
    codeBook: "1502554",
    icon: ServerIcon,
    imageURL: '/assets/images/locations/Ireland.png',
  }

]

export default function Example() {
  const [code, setCode] = useState("")
  const [bookCode, setBook] = useState("")
const [click, setClick] = useState("")




if (click === "click") {
  // console.log(code)
  localStorage.setItem("cityCode", JSON.stringify(code));
  localStorage.setItem("bookCode", JSON.stringify(bookCode));

  // console.log(bookCode)
  return (<PackageSelection/>)
}

  return ( 
  <>
    
    <div className="overflow-hidden py-24 sm:py-32">

    <h2 className="text-3xl font-bold tracking-tight text-amber-100 sm:text-4xl text-center">Pick Your Location</h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        
        <div className="mx-auto grid max-w-2xl grid-cols-4 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
  

              
              
             
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {locations.map((locations) => (
                  
                  <div key={locations.name} className="relative pl-9">
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
     
                    <img className="rounded h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={locations.imageURL} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">{locations.name}</h1>
                   
                    

                   <button
          type="button" onClick={function location(event) {
            event.preventDefault()
            setCode (locations.code)
            setBook (locations.codeBook)
            setClick("click")
          }}
          className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
        >
          Book Now
        </button>
                  </div>
                  </div>
                  </div>
                ))}
              </dl>
            </div>
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
      </>
  )
}