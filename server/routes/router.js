const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add notes
 *  @method GET /add-note
 */
route.get('/add-note', services.add_note)

/**
 *  @description for update note
 *  @method GET /update-note
 */
route.get('/update-note', services.update_note)


// API
route.post('/api/notes', controller.create);
route.get('/api/notes', controller.find);
route.put('/api/notes/:id', controller.update);
route.delete('/api/notes/:id', controller.delete);


module.exports = route