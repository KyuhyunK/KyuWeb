const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000;

express()
  // Remove this line if you do not want to serve files from the 'public' folder
  // .use(express.static(path.join(__dirname, 'public')))
  
  // Serve 'kyu-web.html' from the root directory as the main page
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'kyu-web.html')))

  // Continue to serve other static files from the root directory
  .use(express.static(path.join(__dirname)))

  // If you have other routes or are using a view engine, you can keep them as is
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  // Start the server
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
