import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Ticket() {

const [ticket, setTicket] = useState({})

console.log(ticket._embedded.events[0])

   
   
const fetchTicket = async () => {

    // var retrievedObject = localStorage.getItem('cityCode');
    // var parsedObject = JSON.parse(retrievedObject);

    const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=pink&dmaId=603&apikey=I71rSGwulwznNcHFcIbcGrwcHuC0T9S6`)

    setTicket(response.data)

}
useEffect(() => {
    fetchTicket()
}, []);


return (<>
  {/* <div className="bg-white">
<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
  <div className="relative overflow-hidden rounded-lg lg:h-96">
    <div className="absolute inset-0">
      <img
        src={ticket._embedded.events[0].images[2].url}
        alt=""
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
    <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
    <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
      <div>
        <h2  className="text-xl font-bold text-white">{ticket._embedded.events[0].name}</h2>
        <h5 className="text-xl font-bold text-white">{ticket._embedded.events[0]._embedded.venues[0].name} </h5>
        <h6 className="text-xl font-bold text-white">{ticket._embedded.events[0]._embedded.venues[0].city.name} </h6>
        <h6 className="text-xl font-bold text-white">{ticket._embedded.events[0]._embedded.venues[0].city.name} </h6>
        <h6 className="text-xl font-bold text-white">{ticket._embedded.events[0].dates.start.localDate}</h6>
        <a className="rounded-full bg-indigo-600 py-1 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href={ticket._embedded.events[0].url} role="button">Book Now</a>

        <p className="mt-1 text-sm text-gray-300">
          Upgrade your desk with objects that keep you organized and clear-minded.
        </p>
      </div>
      <a
        href="#"
        className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 py-3 px-4 text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
      >
        View the collection
      </a>
    </div>
  </div>
</div>
</div> */}


      </>

)
}
    



      

  

