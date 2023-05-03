import express from "express"
const app = express();
const port = 5000;
import {sequelize} from "./db.js"
import "./models/Products.js"
import proyectRoutes from "./routes/routes.js"

app.use(express.json());
app.use(proyectRoutes);

/* app.get('/', function (req, res) {
    console.log("volvemos a la home");
    res.send('GET request to homepages')
})

app.get('/products', function (req, res) {
    var products = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))
    console.log(products);
})
 */
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