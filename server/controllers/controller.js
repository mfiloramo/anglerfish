const path = require('path');
const express = require('express');
const { google } = require('googleapis');

require('dotenv').config();

const controller = {};

/** MIDDLEWARE THAT FETCHES VIDEOS FROM THE YOUTUBE API */
controller.fetchVideoId = async (request, response, next) => {
  const videoQuery = request.body.video;

  await google.youtube('v3').search.list({
    key: 'AIzaSyDhNUaCmoSST9i0XFyoLX69YIoDQGgZcKk',
    part: 'snippet',
    q: videoQuery, // THIS IS WHERE WE PASS USER INPUT FROM THE FRONTEND
    maxResults: 1,
  })
    .then(res => {
      response.locals.video = `//www.youtube.com/embed/${res.data.items[0].id.videoId}`;
    let video = response.locals.video
    response.send(video);
    return next();
  })
    .catch(err => console.log(err))
};


module.exports = controller;