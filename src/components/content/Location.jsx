import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import PackageSelection from './PackageSelection'


const locations = [
  {
    name: 'London',
    icon: CloudArrowUpIcon,
    imageURL: '/assets/locations/London.png',
  },
  {
    name: 'South',
    icon: LockClosedIcon,
    imageURL: '/assets/locations/South.png',


  },
  {
    name: 'Wales and North West',
    icon: ServerIcon,
    imageURL: '/assets/locations/NorthWest.png',
  },
  {
    name: 'North and North East',
    icon: CloudArrowUpIcon,
    imageURL: '/assets/locations/NorthEast.png',
  },
  {
    name: 'Midlands and Central',
    icon: LockClosedIcon,
    imageURL: '/assets/locations/Midlands.png',
  },
  {
    name: 'Scotland',
    icon: ServerIcon,
    imageURL: '/assets/locations/Scotland.png',
  },
  {
    name: 'Northern Ireland.',
    icon: ServerIcon,
    imageURL: '/assets/locations/NIreland.png',
  },
  {
    name: 'All of Ireland',
    icon: ServerIcon,
    imageURL: '/assets/locations/Ireland.png',
  },

]

export default function Example() {
  const [location, setLocation] = useState("")
const [click, setClick] = useState("")
if (click === "click") {
  return <> <PackageSelection location = {{location: location}}/>  </>
}

  return ( 
    
    <div className="overflow-hidden bg-white py-24 sm:py-32">
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
          {/* <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot" */}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
    
  )
}
