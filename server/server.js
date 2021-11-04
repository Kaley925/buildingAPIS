const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes'); //refrencing the folder with all routes

let app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(3000);