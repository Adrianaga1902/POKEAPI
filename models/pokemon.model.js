const { DataTypes } = require('sequelize');
const { db } = require('../database/db');


const Pokemon = db.define('pokemons',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:true
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: 'available',
        allowNull: false,
    }
})

module.exports = Pokemon;