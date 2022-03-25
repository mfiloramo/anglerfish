// TODO: FIND A WAY TO CONVERT YOUTUBE VIDEO SOUND TO AUDIO

const express = require('express');
const path = require('path');
const controller = require('../controllers/controller');
const router = express.Router();

/** ADD STARTER DATA REQUEST ROUTE HANDLER HERE */
router.get('/', controller.fetchVideo,
  (request, response) => {
  // RETURN THE VIDEO DATA BACK TO THE CLIENT
})