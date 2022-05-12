const { AuthenticationError } = require('apollo-server-express');
const { User, Genre, Topic, Thread, Reply } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // get all genres
        genres: async () => {
            return await Genre.find();
        },
        // get all topics in one genre
        topics: async (parent, { genre }) => {
            const params = {};
            if (genre) {
                params.genre = genre;
            }
            return await Topic.find(params);
        },
        // get one topic
        topic: async (parent, { _id }) => {
            return await Topic.findById(_id)
                .populate('genre')
                .populate('threads');
        },
        // get all threads in one topic
        threads: async (parent, { topic }) => {
            const params = {};
            if (topic) {
                params.topic = topic;
            }
            return await Thread.find(params);
        },
        // get one thread
        thread: async (parent, { _id }) => {
            return await Thread.findById(_id).populate('replies');
        },
        // get logged in user
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('threads')
                    .populate('replies');
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('threads')
                .populate('replies');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('threads')
                .populate('replies');
        },
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
        addThread: async (parent, args, context) => {
            if (context.user) {
                const thread = await Thread.create({ ...args, username: context.user.username });
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { threads: thread } },
                    { new: true }
                )
                await Topic.findOneAndUpdate(
                    { title: args.topic },
                    { $push: { threads: thread } },
                    { new: true }
                )
                return thread;
            }
            throw new AuthenticationError('Not logged in');
        },
        updateThread: async (parent, args, context) => {
            if (context.thread) {
                return await Thread.findByIdAndUpdate(context.thread._id, args, { new: true });
            }
        },
        deleteThread: async (parent, args, context) => {
            if (context.user) {
                await Topic.findOneAndUpdate(
                    { title: args.topic },
                    { $pull: { threads: {_id: args._id} } },
                    { new: true }
                )
                await Thread.findByIdAndDelete(args._id)
                return "thread deleted"
            }
            throw new AuthenticationError('Not logged in');
        },
        addReply: async (parent, { threadId, content }, context) => {
            if (context.user) {

                const updatedThread = await Thread.findOneAndUpdate(
                    { _id: threadId },
                    { $push: { replies: { content, username: context.user.username } } },
                );

                return updatedThread;



                // const reply = await Reply.create({...args, username: context.user.username});
                // await User.findByIdAndUpdate(
                //     { _id: context.user._id },
                //     { $push: { replies: reply } },
                //     { new: true }
                // )
                // await Thread.findOneAndUpdate(
                //     { title: args.thread },
                //     { $push: { replies: reply } },
                //     { new: true }
                // )
                // return reply;
            }
            throw new AuthenticationError('Not logged in');
        },
        updateReply: async (parent, args, context) => {
            if (context.reply) {
                return await Reply.findByIdAndUpdate(context.reply._id, args, { new: true });
            }
        },
        deleteReply: async (parent, args, context) => {
            if (context.user) {
                return Reply.findByIdAndDelete(args._id)
            }
            throw new AuthenticationError('Not logged in');
        },
    }
}

module.exports = resolvers;
