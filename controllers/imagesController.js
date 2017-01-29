const Image = require('../models/image');

function imagesIndex(req, res) {
  Image.find((err, images) => {
    if (err) return res.status(500).json({ sucess: false, message: err});
    if (!images) return res.status(500).json({ success: false, message: 'No images found' });

    return res.status(200).json(images);
  });
}

function imagesCreate(req, res) {
  console.log(req.file, req.body.image);
  if(req.file) req.body.image.src = req.file;

  // for(const key in req.body) {
  //   image[key] = req.body[key];
  // } //

  Image.create(req.body.image, (err, image) => {
    if (err) return res.status(500).json({ success: false, message: err });
    if (!image) return res.status(500).json({ sucess: false, message: 'Please send the correct information to create a image entry'});

    return res.status(201).json(image);
  });
}

function imagesShow(req, res) {
  Image.findById(req.params.id, (err, image) => {
    if(err) res.status(500).json({ error: err });
    res.json(image);
  });
}

function imagesUpdate(req, res) {
  Image.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, image) => {
    if(err) res.status(500).json({ error: err});
    res.json(image);
  });
}

function imagesDelete(req, res) {
  Image.findByIdAndRemove(req.params.id, (err) => {
    if(err) res.status(500).json({ error: err});
    res.send(204);
  });
}

module.exports = {
  index: imagesIndex,
  create: imagesCreate,
  show: imagesShow,
  update: imagesUpdate,
  delete: imagesDelete
};
