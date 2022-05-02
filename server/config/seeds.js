const db = require('./connection');
const { User, Topic, Genre, Thread } = require('../models');

db.once('open', async () => {

  await Genre.deleteMany();

  const genres = await Genre.insertMany([
    { genreTitle: 'My Outdoor Space Community Forums' },
    { genreTitle: 'Tent Camping' },
    { genreTitle: 'Glamping' },
    { genreTitle: 'Outdoor Room' },
    { genreTitle: 'Survival' }
  ]);

  console.log('genres seeded');

  await Topic.deleteMany();

  const topics = await Topic.insertMany([
    {
      topicTitle: 'Technical Issues',
      topicDescription:
        'Genre/Topic addtions and general techinical issues',
    },
    {
        topicTitle: 'New User Introductions',
        topicDescription:
          'Say hello and introduce yourself',
      },
      {
        topicTitle: 'Where To Camp',
        topicDescription:
          'Awesome places to camp, and terrible places to avoid.',
      },
      {
        topicTitle: 'All things tents',
        topicDescription:
          'Intense tense in tents.',
      },
      {
        topicTitle: 'Tent Camping General',
        topicDescription:
          'All things tent camping',
      },
      {
        topicTitle: 'Glamping General',
        topicDescription:
          'All things glamping',
      },
      {
        topicTitle: 'RVs',
        topicDescription:
          'All things RVs',
      },
      {
        topicTitle: 'Glamping Tech',
        topicDescription:
          'Stay connected',
      },
      {
        topicTitle: 'Outdoor Room General',
        topicDescription:
          'All things outdoor room',
      },
      {
        topicTitle: 'Outdoor furniture',
        topicDescription:
          'All things outdoor furniture',
      },
      {
        topicTitle: 'Survival General',
        topicDescription:
          'All things survival',
      },
      {
        topicTitle: 'Survival Gear',
        topicDescription:
          'Gear to help you surive the wild world',
      },
      {
        topicTitle: 'Innawoods stories',
        topicDescription:
          'Spooky outdoors stories',
      },
  ]);

  console.log('topics seeded');

  await Thread.deleteMany();
  await Thread.insertMany([
      {
          threadTitle: 'Community rules READ BEFORE POSTING TO AVOIND GETTING BANNED',
          threadContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
      },
      {
        threadTitle: 'Suggestions for new genres or topics',
        threadContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
      },
      {
        threadTitle: 'Where to tent camp in WI?',
        threadContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
      },
      {
        threadTitle: 'When glamping how much is too much?',
        threadContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
      },
      {
        threadTitle: 'DIY outdoor room furniture',
        threadContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
      },
      {
        threadTitle: 'Where to camp with only a knife',
        threadContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
      },
      {
        threadTitle: 'I think I saw a skinwalker',
        threadContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
      },
  ])
console.log('threads seeded!')
  await User.deleteMany();

  await User.create({
    username: 'imauser',
    password: 'imauser',
    accessLevel: 'user'
  });

  await User.create({
    username: 'imauser2',
    password: 'imauser2',
    accessLevel: 'user'
  });
  await User.create({
    username: 'imamod',
    password: 'imamod',
    accessLevel: 'mod'
  });
  await User.create({
    username: 'imamod2',
    password: 'imamod2',
    accessLevel: 'mod'
  });

  console.log('users seeded');

  process.exit();
});
