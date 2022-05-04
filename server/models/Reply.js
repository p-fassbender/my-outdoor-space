const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = require('./User');


const replySchema = new Schema({
  replyTitle: {
    type: String,
    required: true,
  },
  replyContent: {
      type: String,
      required: true,
  },
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  }
});

// set up pre-save middleware to create password


const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;