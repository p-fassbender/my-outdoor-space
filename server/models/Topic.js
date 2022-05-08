const mongoose = require('mongoose');
const Thread = require('./Thread');
const { Schema } = mongoose;

const topicSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        threads: [Thread.schema]
    }
);

topicSchema.virtual('threadCount').get(function () {
    return this.threads.length;
});

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;