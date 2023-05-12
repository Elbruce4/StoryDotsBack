import { products } from "../models/Products.js"
//COMMENTED FILES ARE ATTEMPS TO MAKE PRISMA ORM WORKS FOR A GOOD DEPLOY
/* import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
import * as dotenv from 'dotenv'
dotenv.config() */

export const getProducts = async (req , res) => {
    try {
        //prisma test
        /* const test = await prisma.products; */
        let allProducts = await products.findAll();
        res.send(allProducts);
    } catch (error) {
        return res.status(400).json({message : error.message});
    }
}

export const getProductById = async (req , res) => {

    try {
        let param = req.params.id;
       
        let product = await products.findOne({
            where : {
                id : param
            }
        })
        console.log(product);
        product != null ? res.send(product) : res.send("No hay producto con ese ID");
        
    } catch (error) {
        return res.status(400).json({message : error.message});
    }
    
}

export const createProduct = async (req , res) => {

    try {
        
        const {name , description , image , price} = req.body;
    
        //ATTEMP TO MAKE PRISMA NEW PRODUCT
/*         const newProduct = await prisma.products.create({
            data : {
                name,
                description,
                image,
                price
            }
        }) */
        
        const newProduct = await products.create({
            name , description , image , price
        });

        console.log(newProduct);

        res.send("Product created");

    } catch (error) {
        return res.status(400).json({message : error.message});
    }
    
}

export const deleteProduct = async (req , res) => {
    try {

        const id = req.params.id;
        const destroy = await products.destroy({
            where : {
                id
            }
        })
        destroy != 0 ? res.send("Destoy product") : res.send("That product doesn't exist");
    } catch (error) {
        return res.status(400).json({message : error.message});
    }
}

export const updateProduct = async (req , res) => {
    try {
        const id = req.params.id;
        const product = await products.findByPk(id);
        if (product == null) {
            res.status(500).json({message : "No se encontro producto con ese ID"})
        } else {
            let { name , description , image , price } = req.body;
            product.name = name;
            product.description = description;
            product.image = image;
            product.price = price;
            product.save();
            res.send(product); 
        }
    } catch (error) {
        return res.status(400).json({message : error.message});        
    }
}

