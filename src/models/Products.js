import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const products = sequelize.define('products' , {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    } , 
    name : {
        type : DataTypes.STRING,
    },
    description : {
        type : DataTypes.STRING,
    },
    image : {
        type : DataTypes.TEXT,
    },
    price : {
        type : DataTypes.INTEGER,
    },

})

