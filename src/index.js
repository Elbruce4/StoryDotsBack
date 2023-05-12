import express from "express"
const app = express();
import "./models/Products.js"
import proyectRoutes from "./routes/routes.js"
import * as dotenv from 'dotenv'
dotenv.config()
import {sequelize} from "./db.js"
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(proyectRoutes);

console.log(port);

async function main () {
    try {
        await sequelize.sync();
        app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
            console.log(`Now listening on port ${port}`); 
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();