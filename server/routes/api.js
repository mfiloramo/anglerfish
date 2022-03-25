const express = require('express');
const path = require('path');
const controller = require('../controllers/controller');
const router = express.Router();

/** ADD STARTER DATA REQUEST ROUTE HANDLER HERE */
router.get('/', controller.fetchVideo,
  (request, response) => {
  return response.status(200).json(response.locals);
});


// TODO: FIND A WAY TO CONVERT YOUTUBE VIDEO SOUND TO AUDIO
