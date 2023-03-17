import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import PackageSelection from './PackageSelection'


const locations = [
  {
    name: 'London',
  icon: CloudArrowUpIcon,
  },
  {
    name: 'South',
    icon: LockClosedIcon,
  },
  {
    name: 'Wales and North West',
    icon: ServerIcon,
  },
  {
    name: 'North and North East',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Midlands and Central',
    icon: LockClosedIcon,
  },
  {
    name: 'Scotland.',
    icon: ServerIcon,
  },
  {
    name: 'Northern Ireland.',
    icon: ServerIcon,
  },
  {
    name: 'All of Ireland',
    icon: ServerIcon,
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
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Pick Your Location</h2>
             
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {locations.map((locations) => (
                  <div key={locations.name} className="relative pl-9">
                    <h1>{locations.name}</h1>
                   <button
          type="button" onClick={function location(event) {
            event.preventDefault()
            setLocation(locations.name)
            setClick("click")
          }}
          className="rounded-full bg-indigo-600 py-2 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Select
        </button>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
