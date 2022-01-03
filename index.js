require('dotenv').config({ path: './config/config.env' });
const colors = require('colors');

const server = require('./server');

const app = server.app;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`.cyan.bold);
});
