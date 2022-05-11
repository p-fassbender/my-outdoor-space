const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Genre {
        _id: ID
        title: String
    }

    type Topic {
        _id: ID
        title: String
        description: String
        genre: String
        threadCount: Int
        threads:[Thread]
    }

    type Thread {
        _id: ID
        title: String
        content: String
        image: String
        username: String
        topic: String
        replyCount: Int
        replies: [Reply]
    }

    type Reply {
        _id: ID
        title: String
        content: String
        username: String
        thread: String
    }

    type User {
        _id: ID
        username: String
        password: String
        accessLevel: String
        threadCount: Int
        replyCount: Int
        threads: [Thread]
        replies: [Reply]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        genres: [Genre]
        topics(genre: ID): [Topic]
        topic(_id: ID!): Topic
        threads(topic: ID): [Thread]
        thread(_id: ID!): Thread
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        addUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        updateUser(username: String!, password: String!): User
        addThread(title: String!, content: String!, topic: String!): Thread
        updateThread(title: String, content: String): Thread
        deleteThread(_id: ID!, topic: String!): Thread
        addReply(title: String!, content: String!, thread: String!): Reply
        updateReply(title: String, content: String): Reply
        deleteReply(_id: ID!): Reply
    }
`;

module.exports = typeDefs;
