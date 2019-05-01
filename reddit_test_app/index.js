const Snoowrap = require('snoowrap');
const Max = require('max-api');

const requester = new Snoowrap(require('./creds.json'));


requester.getSubreddit('r/depression_help')
    .getRandomSubmission()
    .then(submission => 
        Max.outlet(submission.title.toUpperCase()));