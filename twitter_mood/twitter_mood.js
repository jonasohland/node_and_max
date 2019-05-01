const Twitter = require('twitter');
const Max = require('max-api');

let client = new Twitter(require('./creds.json'));


client.stream('statuses/filter', { track: 'Afd,Abschiebung,Höcke,Weidel,Gauland' }, function(stream){
    stream.on('data', function(event){
        Max.outlet(0);
    });
});

client.stream('statuses/filter', { track: 'Blumen,Katzen,Liebe,Frieden' }, function(stream){
    stream.on('data', function(event){
        Max.outlet(1);
    });
});