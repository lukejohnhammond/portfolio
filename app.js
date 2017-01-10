const express     = require('express');
const app         = express();
const port        = process.env.PORT || 8000;
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const routes      = require('./config/routes');
const db          = require('./config/db');


mongoose.connect(db.uri);

const morgan = require('morgan');
// user morgan for logging
app.use(morgan('dev'));

// Allow reading of HTTP requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(express.static(`${__dirname}/public`));

app.listen(port, () => console.log(`Express is listening on port ${port}`));


//mongodb://heroku_jvtchd6h:37f3pga71gnpa48ihh5mn3hude@ds157158.mlab.com:57158/heroku_jvtchd6h
