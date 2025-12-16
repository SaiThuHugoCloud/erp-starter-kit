const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node Express Backend!');
});

app.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});