const { AuthenticationError } = require('apollo-server-express');
const { User, Genre, Topic, Thread, Reply } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        genres: async () => {
            return await Genre.find();
        },
        topics: async () => {
            return await Topic.find();
        },
        threads: async () => {
            return await Thread.find();
        },
        replies: async () => {
            return await Reply.find();
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

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
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        addThread: async (parent, { topics }, context) => {
            console.log(context);
            if (context.thread) {
                const topic = new Thread({ Topic });

                await Thread.findByIdAndUpdate(context.user._id, { $push: { topics: topic } });

                return topic;
            }

            throw new AuthenticationError('Not logged in');
        },
        updateThread: async (parent, args, context) => {
            if (context.thread) {
                return await Thread.findByIdAndUpdate(context.thread._id, args, { new: true });
            }
        },
        deleteThread: async (parent, { threadId }, context) => {
            if (context.topic) {
                const updateTopic = await Topic.findOneAndUpdate(
                    { _id: context.topic._id },
                    { $pull: { threads: { threadId: threadId } } },
                    { new: true }
                );
                return updateTopic;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addReply: async (parent, { threads }, context) => {
            console.log(context);
            if (context.thread) {
                const thread = new Reply({ Thread });

                await Reply.findByIdAndUpdate(context.reply._id, { $push: { threads: thread } });

                return thread;
            }

            throw new AuthenticationError('Not logged in');
        },
        updateReply: async (parent, args, context) => {
            if (context.thread) {
                return await Thread.findByIdAndUpdate(context.thread._id, args, { new: true });
            }
        },
        deleteReply: async (parent, { replyId }, context) => {
            if (context.thread) {
                const updateThread = await Thread.findOneAndUpdate(
                    { _id: context.thread._id },
                    { $pull: { replies: { replyId: replyId } } },
                    { new: true }
                );
                return updateThread;
            }
        },
    }
}

module.exports = resolvers;
