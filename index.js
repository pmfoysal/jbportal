require('colors');
require('dotenv').config();
const cors = require('cors');
require('./configs/pathAlias')();
const routes = require('@routes');
const express = require('express');
const databases = require('@databases');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/', routes(port));

app.listen(port, () => {
   console.log(`App is running on port: ${port}`.blue.bold);
   databases.v1.mongoDB();
});
