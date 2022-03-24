const path = require('path');
const express = require('express');

const app = express();
const PORT = 3009;

/** REQUIRE ROUTERS */
// CONSTRUCT ROUTERS HERE


/** HANDLE PARSING REQUEST BODY */
app.use(express.json());

/** HANDLE REQUESTS FOR STATIC FILES */
app.use('/assets', express.static(path.resolve(__dirname, 'client/assets/')));

/** DEFINE ROUTE HANDLERS */


/** ROUTE HANDLER TO RESPOND WITH MAIN APP */
app.get('/', (request, response) => {
  return response.sendFile(path.resolve(__dirname, '../client/index.html/'));
})

/** CATCH-ALL ROUTE HANDLER FOR ANY REQUESTS TO AN UNKNOWN ROUTE */


/** CONFIGURE EXPRESS GLOBAL ERROR HANDLER */


/** START SERVER */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;