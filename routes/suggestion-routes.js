var express = require('express');
var router = express.Router();
var Fuse = require('fuse.js');

var cities = require('cities.json');

router.get('/', function(req, res){
    res.send('Welcome to the getdev suggestion api');
});

router.get('/suggestions', function(req, res){
    const { q, latitude, longitude } = req.query;
    var options = {
        keys: ["name"]
    }
    var fuse = new Fuse(cities, options);
    const result= fuse.search(q);
    res.send({suggestions:result}).status(200);
});

// export default router;
module.exports = router;