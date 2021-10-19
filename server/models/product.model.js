const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const ProductSchema = new mongoose.Schema({
    
    titleProduct: { 
        type: String,
        require: [true, 'Debes ingresar un producto'],
        unique: [true, 'Este producto ya existe']
    },
    
    priceProduct: { 
        type: Number,
        require: [true,'Debes agregar un precio'],
        
    
    },
    
    descriptionProduct: { 
        type: String,
        require: [true, 'Debes ingresar una descripcion']
    }
}, { timestamps: true });
const Product = mongoose.model('Product', ProductSchema);
ProductSchema.plugin(uniqueValidator);
module.exports = Product;
