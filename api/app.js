const express = require('express');
const app = express();
var morgan = require('morgan');
app.use(morgan('dev'));

const router = require('./routes');
app.use(router);

app.listen(5000, () => {
    console.log("server started");
});