const { AuthenticationError } = require('apollo-server-express');
const { User, Genre, Topic, Thread, Reply } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    genres: async () => {
        return await Genre.find();
    },
    topics: async (parent, {genre, topicTitle}) => {
        const params = {};
        if(genre) {
            params.genre = genre;
        }
        if (topicTitle) {
            params.topicTitle = topicTitle
        }
        return await Topic.find();
    },
    threads: async () => {
        return await Thread.find();
    },
    replies: async () => {

    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { input }, context) => {
      if (context.user) {
        const updateOneUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } },
          { new: true, runValidators: true }
        );

        return updateOneUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeBook: async (parent, { bookId }, context) => {
        if (context.user) {
          const updateOneUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: { bookId: bookId } } },
            { new: true }
          );
  
          return updateOneUser;
        }
  
        throw new AuthenticationError('You need to be logged in!');
      },
  }
};

module.exports = resolvers;
