const sequelize = require('../config/connection')
const {Comment, DadJoke, User} = require('../models')

const userData = require('./userData.json')
const postingDadJokes = require('./postingDadJokes.json')
const commentSeeds = require('./comments.json')

const seedDatabase = async () => {
    await sequilize.sync({ force: true});

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for(const dadJokes of postingDadJokes) {
        await DadJoke.create({
            ...dadJokes,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });

        for(const comment of commentSeeds) {
            await Comment.create({
                ...comment,
                user_id: users[Math.floor(Math.random() * users.length)].id,
                dad_joke_id: dadJokes.id
                
            })
        };

    }

    

    process.exit(0);


};

seedDatabase();

