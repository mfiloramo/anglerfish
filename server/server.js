const path = require('path');
const express = require('express');

const app = express();
const PORT = 3010;

/** REQUIRE ROUTERS */
const apiRouter = require(path.resolve(__dirname, './routes/api.js'));

/** HANDLE PARSING REQUEST BODY */
app.use(express.json());

/** HANDLE REQUESTS FOR STATIC FILES */
app.use(express.static(path.resolve(__dirname, '../client/stylesheets/styles.css')));

/** DEFINE ROUTE HANDLERS */
app.use('/api', apiRouter);

/** ROUTE HANDLER TO RESPOND WITH MAIN APP */
app.get('/', (request, response) => {
  return response.sendFile(path.resolve(__dirname, '../client/index.html/'));
})

/** CATCH-ALL ROUTE HANDLER FOR ANY REQUESTS TO AN UNKNOWN ROUTE */
app.use('*', (request, response) => {
  response.status(404).send('Error: Page not found');
});

/** CONFIGURE EXPRESS GLOBAL ERROR HANDLER */
app.use((error, request, response, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, { error: error });
  response.status(errorObj.status).json(errorObj.message.err);
});

/** START SERVER */
app.listen(PORT, () => {
  console.log(`Server connected -- listening on port: ${PORT}`);
});

module.exports = app;