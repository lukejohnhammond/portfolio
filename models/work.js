const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortIntro: { type: String, required: true },
  mainContent: { type: String },
  mainContentSecondary: { type: String },
  mainContentTertiary: { type: String },
  heroImage: { type: String },
  images: [{ type: String }],
  gitHub: { type: String },
  liveLink: { type: String }
}, {
  timestamps: true
});

workSchema.set('toJSON', { getters: true, virtuals: false });

module.exports = mongoose.model('Work', workSchema);
