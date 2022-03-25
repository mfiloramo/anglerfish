const path = require('path');
const express = require('express');
const { google } = require('googleapis');

require('dotenv').config();



const controller = {};

/** MIDDLEWARE THAT FETCHES VIDEOS FROM THE YOUTUBE API */
controller.fetchVideo = (request, response, next) => {
  google.youtube('v3').search.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    q: 'Zero 7 Destiny',
    maxResults: 1,
  })
    .then(res => {
    response.locals.video = `//www.youtube.com/embed/${res.data.items[0].id.videoId}`
    return next();
  })
    .catch(err => console.log(err));
}



module.exports = controller;