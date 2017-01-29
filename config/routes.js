const express   = require('express');
const router    = express.Router();
const secret    = require('../config/token').secret;
const jwt       = require('jsonwebtoken');

const authController = require('../controllers/authController');
const blogsController = require('../controllers/blogsController');
const worksController = require('../controllers/worksController');
const imagesController = require('../controllers/imagesController');

const imageUpload = require('../lib/imageUpload');

const registerRoute = process.env.REGROUTE || '/register';

// middleware

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'Invalid credentials, please try again' });

  const token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, (err, payload) => {
    if(err) return res.status(401).json({ message: 'Invalid credentials, please try again.'});
    req.user = payload;

    next();
  });
}

router.route(registerRoute)
  .post(authController.register);

router.route('/auth/login')
  .post(authController.login);

router.route('/api/blogs')
  .get(blogsController.index)
  .post(secureRoute, blogsController.create);

router.route('/api/blogs/:id')
  .get(blogsController.show)
  .put(secureRoute, blogsController.update)
  .patch(secureRoute, blogsController.update)
  .delete(secureRoute, blogsController.delete);

router.route('/api/works')
  .get(worksController.index)
  .post(secureRoute, worksController.create);

router.route('/api/works/:id')
  .get(worksController.show)
  .put(secureRoute, worksController.update)
  .patch(secureRoute, worksController.update)
  .delete(secureRoute, worksController.delete);

router.route('/api/images')
  .get(imagesController.index)
  .post(secureRoute, imageUpload, imagesController.create);

router.route('/api/images/:id')
  .get(imagesController.show)
  // .put(secureRoute, imagesController.update)
  // .patch(secureRoute, imagesController.update)
  .delete(secureRoute, imagesController.delete);

module.exports = router;
