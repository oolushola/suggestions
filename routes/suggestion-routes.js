import { Router } from 'express';
import Fuse from 'fuse.js';
import cities from 'cities.json';

const router = Router();

router.get('/', function(req, res){
    res.send('Welcome to the getdev suggestion api');
});

/**
 * @query {q} as city suggetion, Optional {latitude} Latitude and {longitude} Longitude
 * 
 * @response [{...}] array of Objects
 */

router.get('/suggestions', function(req, res){
    const { q, latitude, longitude } = req.query;
    const options = {
        keys: ["name"]
    }
    const fuse = new Fuse(cities, options);
    const result= fuse.search(q);
    res.send({ message: 'successful', status: 200, suggestions:result}).status(200);
});

 export default router;
