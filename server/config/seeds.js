const db = require('./connection');
const { Topic, Genre, Thread, Reply, User } = require('../models');
const { UserInputError } = require('apollo-server-express');

db.once('open', async () => {
    // genres
    await Genre.deleteMany();
    const genres = await Genre.insertMany([
        { title: 'Camping' },
        { title: 'Outdoor Living Room' },
        { title: 'Survival' },
        { title: 'General Discussion' },
    ]);
    console.log('genres seeded');

    // topics
    await Topic.deleteMany();
    const topics = await Topic.insertMany([
        {
            title: 'Carry In',
            description:'Talk about the long haul',
            genre:'Camping'
        },
        {
            title: 'Tent Camping',
            description:'All things related to camping in a tent',
            genre:'Camping'
        },
        {
            title: 'Camper Camping',
            description:'Park wherever and enjoy nature from the comfort of your own mobile home',
            genre:'Camping'
        },
        {
            title: 'Glamping',
            description:'For the people that like the outdoors, but not being outdoors',
            genre:'Camping'
        },
        {
            title: 'Patio',
            description:'Wicker, wood, and aluminum galore',
            genre:'Outdoor Living Room'
        },
        {
            title: 'Decks',
            description:'There\'s just something about a large deck that makes me excited',
            genre:'Outdoor Living Room'
        },
        {
            title: 'Water Features',
            description:'Would you rather have a bubbler or a water fountain in the middle of your yard',
            genre:'Outdoor Living Room'
        },
        {
            title: 'Weekend Trips',
            description:'Destinations and strategies for the weekend warriors out there',
            genre:'Survival'
        },
        {
            title: 'Week Long Trips',
            description:'7 days of lifelong memories. Unless it rains',
            genre:'Survival'
        },
        {
            title: 'Extended Period Trips',
            description:'Tips and Trick to survival that long adventure away from home',
            genre:'Survival'
        },
        {
            title: 'The Lounge',
            description:'Come here to talk about anything and everything',
            genre:'General Discussion'
        },
        {
            title: 'Swap Meet',
            description:'Buy, Sell, Trade',
            genre:'General Discussion'
        }
    ]);
    console.log('topics seeded');

    await Reply.deleteMany();
    await User.deleteMany();
    // // threads
    await Thread.deleteMany();
    // await Thread.insertMany([
    //     {
    //         title: 'Community rules READ BEFORE POSTING TO AVOIND GETTING BANNED',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
    //         username: 'username',
    //         topic: 'Carry In'
    //     },
    //     {
    //         title: 'Suggestions for new genres or topics',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
    //         username: 'username',
    //         topic: 'Carry In'
    //     },
    //     {
    //         title: 'Where to tent camp in WI?',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
    //         username: 'username',
    //         topic: 'Carry In'
    //     },
    //     {
    //         title: 'When glamping how much is too much?',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
    //         username: 'username',
    //         topic: 'Tent Camping'
    //     },
    //     {
    //         title: 'DIY outdoor room furniture',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
    //         username: 'username',
    //         topic: 'Tent Camping'
    //     },
    //     {
    //         title: 'Where to camp with only a knife',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
    //         username: 'username',
    //         topic: 'Tent Camping'
    //     },
    //     {
    //         title: 'I think I saw a skinwalker',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cumque accusamus vel, nostrum nemo nesciunt rem officiis. Distinctio quibusdam ullam consectetur rem, quisquam officia fugiat corporis, tenetur blanditiis aspernatur dolorum?',
    //         username: 'username',
    //         topic: 'Camper Camping'
    //     }
    // ])
    // console.log('threads seeded!')

    process.exit();
});
