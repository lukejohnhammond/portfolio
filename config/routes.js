const express   = require('express');
const router    = express.Router();
const secret    = require('../config/token').secret;
const jwt       = require('jsonwebtoken');

const authController = require('../controllers/authController');
const blogsController = require('../controllers/blogsController');

// middleware

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'Invalid credentials, please try again' });

  const token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, (err, payload) => {
    if(err) return res.status(401).json({ message: "Invalid credentials, please try again."});
    req.user = payload;

    next();
  });
}

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

router.route('/blogs')
  .get(blogsController.index)
  .post(blogsController.create);

router.route('/blogs/:id')
  .get(blogsController.show)
  .put(secureRoute, blogsController.update)
  .patch(secureRoute, blogsController.update)
  .delete(secureRoute, blogsController.delete);

module.exports = router;
