const express = require('express');

const DevConstroller = require('./controllers/DevController');

const LikeController = require('./controllers/LikeController');

const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.post('/dev', DevConstroller.store);
routes.get('/dev', DevConstroller.index);
routes.post('/dev/:devId/likes', LikeController.store);

routes.post('/dev/:devId/dislikes', DislikeController.store);


module.exports = routes;