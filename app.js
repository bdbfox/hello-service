const express = require('express');
const app = express();

app.get('/:name?', (req, res) => {
  const name = (req && req.params && req.params.name) || "Sir";
  res.json({ message: `Hello ${name}!` });
});

app.listen(3000, () => {
  console.log('Hello service listening on port 3000!');
});
