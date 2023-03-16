import axios from "axios";

let locationInput = "birmingham";
let completedLocation;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'effe14985cmsh962d7b641918161p1bf3e5jsn92b6af363b24',
        'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
    }
};

// Export an object containing methods we'll use for accessing the GitHub Jobs API
export default {
  searchLocation: function(location) {    
    return getGeolocation(location);
  }
};

getGeolocation()
// Function to find lon, lat and city id for searched city
function getGeolocation() {
    console.log("hello")
    // get info on location full address, lat/lon and location id for restaurant search
    axios.get(`https://the-fork-the-spoon.p.rapidapi.com/locations/v2/auto-complete?text=${locationInput}`, options)
        .then(completedLocation => {
        
            // retrieve autocompleted location id, name & type
            // console.table(completedLocation.data.data.geolocation[0])
            let locationId = completedLocation.data.data.geolocation[0].id.id;
            let geoText = completedLocation.data.data.geolocation[0].name.text;
            let locationType = completedLocation.data.data.geolocation[0].id.type;
            return axios.get(`https://the-fork-the-spoon.p.rapidapi.com/locations/v2/list?google_place_id=${locationId}&geo_ref=false&geo_text=${geoText}&geo_type=${locationType}`, options)
        })

        .then(cityGeo => {
            console.log(cityGeo);
            let cityId = cityGeo.data.id_city;
            return getRestaurants(cityId)
        })
        .catch(err => console.error(err));
}

// Function to find restaurants available in searched city
function getRestaurants(cityId) {
    // get list of restaurant in nearby
    axios.get(`https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=${cityId}&pageSize=10&pageNumber=1`, options)
        .then(restaurants => {
            let restaurantsData = restaurants.data.data
            return console.log(restaurantsData[0].address)
        })
        .catch(err => console.error(err));
}
