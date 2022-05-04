const mongoose = require('mongoose');

const { Schema } = mongoose;
//const Reply = require('./Reply');


const threadSchema = new Schema({
  threadTitle: {
    type: String,
    required: true,
  },
  threadContent: {
      type: String,
      required: true,
  },
  threadImage: {
      type: String,
  },
//  replies: [Reply.schema],
//  replyCount: [
//    {
//      type: Schema.Types.ObjectId,
//      ref: 'Reply'
//    }
//  ]
});

// set up pre-save middleware to create password


const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;