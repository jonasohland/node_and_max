const Snoowrap = require('snoowrap');
const Max = require('max-api');

const requester = new Snoowrap(require('./creds.json'));

requester.getSubreddit('r/fifthworldproblems')
    .getRandomSubmission()
    .then(submission =>
        Max.outlet(submission[Math.floor(Math.random() * submission.length)].title.toUpperCase()));