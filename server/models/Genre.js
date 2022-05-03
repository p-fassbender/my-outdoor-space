const mongoose = require('mongoose');

const { Schema } = mongoose;
const Topic = require('./Topic');


const genreSchema = new Schema({
  genreTitle: {
    type: String,
    required: true,
  },
  topics: [Topic.schema]
});

// set up pre-save middleware to create password


const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
