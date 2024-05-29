// const express = require('express');
// const sequelize = require('./config/sequelize');
// const routes = require('./routes');

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/api', routes);

// sequelize.sync().then(() => {
//   console.log('Database synchronized');
//   app.listen(3000, () => {
//     console.log('Server listening on port 3000');
//   });
// }).catch((err) => {
//   console.error('Error synchronizing database:', err);
// });

const express = require('express');
const app = express();
const routes = require('./routes');
const errorHandler = require('./utils/errorHandler');

app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

module.exports = app;
