const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./ProductSchema');

// Connect to MongoDB database
mongoose
  .connect("mongodb+srv://Vaghamashi_Deep:\"Dark__Moon\"@cluster0.kd5it.mongodb.net/Inventory", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected with cloudDB");

    const app = express();
    app.use(bodyParser.json()); // Use JSON parser for POST request bodies
    app.use(cors());

    // Get all products
    app.get('/product', async (req, res) => {
      const products = await Product.find();
      res.send(products);
    });

    // Get product by name
    app.get('/:name', async (req, res) => {
      try {
        const product = await Product.findOne({ Name: req.params.name });
        if (!product) {
          return res.status(404).send({ error: "Product doesn't exist!!" });
        }
        res.send(product);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    // Add/insert new product
    app.post('/product/add', async (req, res) => {
      try {
        const product = new Product(req.body);
        const result = await product.save();
        res.send(result);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    // Update product by name
    app.patch('/:name', async (req, res) => {
      try {
        const product = await Product.findOne({ Name: req.params.name });
        if (!product) {
          return res.status(404).send({ error: "Product doesn't exist!!" });
        }
        Object.assign(product, req.body);
        const result = await product.save();
        res.send(result);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    // Delete product by name
    app.delete('/product/delete/:name', async (req, res) => {
      try {
        const product = await Product.findOneAndDelete({ Name: req.params.name });
        if (!product) {
          return res.status(404).send({ error: "Product doesn't exist!!" });
        }
        res.send(product);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    app.listen(5005, () => {
      console.log("Server start @ 5005.");
    });
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
