const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

const router = express.Router();

app.use(express.static(`${__dirname}/public`));
app.use(router);

app.listen(port, () => console.log(`Express is listening on port ${port}`));


//mongodb://heroku_jvtchd6h:37f3pga71gnpa48ihh5mn3hude@ds157158.mlab.com:57158/heroku_jvtchd6h
