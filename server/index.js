const port = process.env.PORT || 5500;

const cors = require('cors');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

const db = require('./models');

const linksRouter = require('./routes/Links');
app.use('/', linksRouter);

db.sequelize.sync().then(( )=> {
    app.listen(port, () => {
        console.log(`Server is currently running on port: ${port}`);
    });
})