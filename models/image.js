const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  src: { type: String, unique: true, required: true },
  type: { type: String },
  caption: { type: String, required: true }
}, {
  timestamps: true
});

imageSchema.set('toJSON', { getters: true, virtuals: false });

module.exports = mongoose.model('Image', imageSchema);
