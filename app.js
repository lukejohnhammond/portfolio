const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

const router = express.Router();

app.use(express.static(`${__dirname}/public`));
app.use(router);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
