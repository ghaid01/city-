'use strict';

require('dotenv').config();

//our dependencies 
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;

const server = express();
console.log(server);

server.listen( PORT, () => console.log(`app listening on port ${PORT}`));


server.get('/location',(request,response) =>{
    const locationData = require('./data/geo.json');
    const location = new Location(locationData);
    response.status(200).json(location);
});
function Location( data ) {
this.search_query = 'jordan';
this.formatted_qurey = data.results[0].formatted_address;
this.latitude = data.results[0].geometry.location.lat;
this.longitude = data.results[0].geometry.location.lng;
}



server.get('/',(request,response) => {
    response.status(200).send('you did great');
    console.log(request);
})

server.get('/boo',(request,response) => {
throw new Error('hala hala ya 3youni');
});

server.use( '*', (request,response) =>{
    response.status(404).send('NOT FOUND')
});

server.use ( (error,request,response) =>{
    response.status(500).send(error)

});




