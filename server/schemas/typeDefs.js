const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Genre {
    _id: ID
    genreTitle: String
    topics: [Topic]
  }

  type Topic {
    _id: ID
    topicTitle: String
    topicDescription: String
    threads: [Thread]
  }

  type Thread {
    _id: ID
    threadTitle: String
    ThreadContent: String
    ThreadImage: String
    replies: [Reply]
  }
  type Reply {
      _id: ID
      replyTitle: String
      replyContent: String
      user: [User]
  }

  type User {
    _id: ID
    username: String
    password: String
    accessLevel: String
    threads: [Thread]
    replies: [Reply]
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    genre: [Genre]
    topics(genre: ID, topicTitle: String): [Topic]
    topic(_id: ID!): Topic
    user: User
    threads: [Thread]
    thread(_id: ID!): Thread
    replies(_id: [ID]!): Reply
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    updateUser(username: String!, password: String!): User
    addThread(threadTitle: String!, threadContent: String!): Thread
    updateThread(threadTitle: String!, threadContent: String!): Thread
    deleteThread(_id: ID!): Thread
    addReply(replyTitle: String!, replyContent: String!, user: String!): Reply
    updateReply(replyTitle: String!, replyContent: String!): Reply
    deleteReply(_id: ID!): Reply
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
