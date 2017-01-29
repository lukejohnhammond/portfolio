const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  src: { type: String, unique: true, required: true, get: addImagePath, set: removeImagePath },
  type: { type: String },
  caption: { type: String, required: true }
}, {
  timestamps: true
});

function addImagePath(image) {
  if(!image) return null;
  return `https://s3-eu-west-1.amazonaws/wdi23-project3-cell/${image}`;
}

function removeImagePath(fullPath) {
  return fullPath.split('/').splice(-1)[0];
}

imageSchema.set('toJSON',
  {
    getters: true,
    virtuals: false
  }
);

module.exports = mongoose.model('Image', imageSchema);
