/* const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env; */
import Sequelize from "sequelize";


export const sequelize = new Sequelize(
  'storydots' ,
  'postgres' , 
  'mancha136' , {
    host : "localhost", //
    dialect : "postgres"
  }
)