const express = require('express');
const cors = require('cors');
const santaRoutes = require('./routes/santaRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', santaRoutes);

module.exports = app;