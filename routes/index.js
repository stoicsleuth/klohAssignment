const express = require('express');
const router = express.Router();
const eventController = require ('../controllers/eventController');
//route for events page
router.get('/', eventController.showEvents);
//route for single event page
router.get('/events/:id', eventController.showEvent);


module.exports = router;