require('colors');
require('dotenv').config();
const cors = require('cors');
const express = require('express');
require('./src/configs/pathAlias')();
const routes = require('./src/routes');
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
