const mongoose = require('mongoose');
const { Schema } = mongoose;

const replySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    thread: {
        type: String,
        required: true
    }
});

const Reply = mongoose.model('Reply', replySchema);
module.exports = Reply;