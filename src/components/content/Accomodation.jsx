




fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&dmaId=${cityCode}&apikey=I71rSGwulwznNcHFcIbcGrwcHuC0T9S6`)
    .then(response => response.json())
    .then (function(response){
console.log(response._embedded.events[0].url)})