const Twitter = require('twitter');
const Max = require('max-api');

let client = new Twitter(require('./creds.json'));


client.stream('statuses/filter', { track: 'Afd,Höcke,Weidel,Gauland,Nazis' }, function(stream){
    stream.on('data', function(event){
        Max.outlet(0);
    });
});

client.stream('statuses/filter', { track: 'Blumen,Katzen,Liebe,Frieden,Wolken,Frühling' }, function(stream){
    stream.on('data', function(event){
        Max.outlet(1);
    });
});
