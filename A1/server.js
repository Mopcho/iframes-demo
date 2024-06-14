const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, './')));

app.listen(PORT, '127.0.0.3', () => {
  console.log(`Server is listening on port ${PORT}`);
});
