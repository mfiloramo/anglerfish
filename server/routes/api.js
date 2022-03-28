const express = require('express');
const path = require('path');
const controller = require('../controllers/controller');
const router = express.Router();

/** ADD STARTER DATA REQUEST ROUTE HANDLER HERE */
router.post('/', controller.fetchVideoId,
  (request, response) => {
  // let video = request.body.video;
  return response.locals.video;
  // return response.status(200).json({ error: null, data: video });
});

module.exports = router;
