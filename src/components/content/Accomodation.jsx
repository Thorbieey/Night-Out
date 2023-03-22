




fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&dmaId=${cityCode}&apikey=I71rSGwulwznNcHFcIbcGrwcHuC0T9S6`)
    .then(response => response.json())
    .then (function(response){
console.log(response._embedded.events[0].url)})


//Booking.com fetch

// useEffect(() => {
 
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '368853d1ecmshf08dfad6a3f5517p11fdb2jsnac38bffe319a',
//             'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?dest_id=-${cityBooking}&order_by=popularity&filter_by_currency=AED&adults_number=${guests}&room_number=${rooms}&checkout_date=${checkOut}&units=metric&checkin_date=${checkIn}&dest_type=city&locale=en-gb&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true&children_number=2`, options')
//         .then(response => response.json())
//         .then(data => setTotalReactPackages(data.total));

// }, []);