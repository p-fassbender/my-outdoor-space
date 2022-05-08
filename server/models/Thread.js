const mongoose = require('mongoose');
const { Schema } = mongoose;
const Reply = require('./Reply');

const threadSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        username: {
            type: String,
            required: true
        },
        topic: {
            type: String,
            required: true
        },
        replies: [Reply.schema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

threadSchema.virtual('replyCount').get(function () {
    return this.replies.length;
});

const Thread = mongoose.model('Thread', threadSchema);
module.exports = Thread;