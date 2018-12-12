require('dotenv').config();
const express = require('express');
const app = express();
const { PORT } = process.env;
app.use(require('cors')());
app.use(require('body-parser').json());

require('./models');
require('./routes')(app)

app.listen(PORT, () => {
    console.log(`the server is listening on port: ${PORT}`);
})