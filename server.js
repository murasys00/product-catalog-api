const express = require('express');
const app = express();

const Products = [
    {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "price": 45000,
        "inStock": true
    },

    {
        "id": 2,
        "name": "Headphone",
        "category": "Electronics",
        "price": 2500,
        "inStock": true
    },

    {
        "id": 3,
        "name": "Mouse",
        "category": "Accessories",
        "price": 3000,
        "inStock": false
    },

    {
        "id": 4,
        "name": "Desktop",
        "category": "Electronics",
        "price": 54000,
        "inStock": false
    },

    {
        "id": 5,
        "name": "Bed",
        "category": "Furniture",
        "price": 30000,
        "inStock": true
    }
];

app.use(express.json());
app.use(express.static("public"));

app.get('/products', (req,res) => {
    res.json(Products);
});

app.get('/products/categories', (req,res) => {
  const categories = [...new Set(Products.map((p) => p.category))];
  res.json({ categories });
});

app.get('/products/instock', (req,res) => {
    const instock = Products.filter((p) => p.inStock === true);
    res.json(instock);
});

app.listen(3000, () => {
    console.log("Server has started listening!!");
});