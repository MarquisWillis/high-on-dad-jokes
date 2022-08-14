// import model(s)
const DadJoke = require('./DadJoke');
const User = require('./User');
const Comment = require('./Comment');

// establish relationships between models
User.hasMany(DadJoke, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

DadJoke.hasMany(Comment, {
    foreignKey: 'dad_joke_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(DadJoke, {
    foreignKey: 'dad_joke_id'
});

DadJoke.belongsTo(User, {
    foreignKey: 'user_id'
});

// export model(s)
module.exports = {User, DadJoke, Comment};