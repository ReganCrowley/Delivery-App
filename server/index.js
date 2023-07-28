const { resolve } = require('path');
const express = require('express');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get('/', (_req, res) => {
  res.sendFile(resolve(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`[SERVER] http://localhost:${PORT}/`);
});