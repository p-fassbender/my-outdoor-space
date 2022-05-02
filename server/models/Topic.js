const mongoose = require('mongoose');

const { Schema } = mongoose;
const Thread = require('./Thread');


const topicSchema = new Schema({
  topicTitle: {
    type: String,
    required: true,
    trim: true
  },
  topicDescription: {
      type: String,
      required: true,
  },
  threads: [Thread.schema],
  threadCount: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thread'
    }
  ]
});

// set up pre-save middleware to create password


const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;