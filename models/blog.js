const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortIntro: { type: String, required: true },
  mainContent: { type: String },
  images: { type: String }
}, {
  timestamps: true
});

blogSchema.set('toJSON', { getters: true, virtuals: false });

module.exports = mongoose.model('Blog', blogSchema);
