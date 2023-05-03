import { products } from "../models/Products.js"

export const getProducts = async (req , res) => {
    try {
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
    
        const newProduct = await products.create({
            name , description , image , price
        });
    
        console.log(newProduct);
    
        res.send("Create products")

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

