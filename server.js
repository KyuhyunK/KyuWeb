const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.join(__dirname))); // Serve static files from root

// If kyu-web.html is your main file and it's in the root directory
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'kyu-web.html')));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
