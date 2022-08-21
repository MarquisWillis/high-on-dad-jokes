const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class DadJoke extends Model {};

DadJoke.init(
    {
        // define columns of DadJoke model
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        dad_joke: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dad_joke' 
    }
);

module.exports = DadJoke;