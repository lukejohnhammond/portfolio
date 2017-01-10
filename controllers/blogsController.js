const Blog = require('../models/blog');

function blogsIndex(req, res) {
  Blog.find((err, blogs) => {
    if (err) return res.status(500).json({ sucess: false, message: err});
    if (!blogs) return res.status(500).json({ success: false, message: 'No blogs found' });

    return res.status(200).json(blogs);
  });
}

function blogsCreate(req, res) {
  Blog.create(req.body.blog, (err, blog) => {
    if (err) return res.status(500).json({ success: false, message: err });
    if (!blog) return res.status(500).json({ sucess: false, message: 'Please send the correct information to create a blog entry'});

    return res.status(201).json(blog);
  });
}

function blogsShow(req, res) {
  Blog.findById(req.params.id, (err, blog) => {
    if(err) res.status(500).json({ error: err });
    res.json(blog);
  });
}

function blogsUpdate(req, res) {
  Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, blog) => {
    if(err) res.status(500).json({ error: err});
    res.json(blog);
  });
}

function blogsDelete(req, res) {
  Blog.findByIdAndRemove(req.params.id, (err) => {
    if(err) res.status(500).json({ error: err});
    res.send(204);
  });
}

module.exports = {
  index: blogsIndex,
  create: blogsCreate,
  show: blogsShow,
  update: blogsUpdate,
  delete: blogsDelete
};
