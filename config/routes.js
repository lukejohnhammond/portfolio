const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const blogsController = require('../controllers/blogsController');

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

router.route('/blogs')
  .get(blogsController.index)
  .post(blogsController.create);

router.route('/blogs/:id')
  .get(blogsController.show)
  .put(blogsController.update)
  .patch(blogsController.update)
  .delete(blogsController.delete);

module.exports = router;
