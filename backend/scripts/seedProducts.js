const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');

dotenv.config();

const products = [
  {
    title: 'Sample Product 1',
    description: 'This is a sample product',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
    category: 'Electronics',
    countInStock: 10,
  },
  {
    title: 'Sample Product 2',
    description: 'This is another sample product',
    price: 49.99,
    image: 'https://via.placeholder.com/150',
    category: 'Books',
    countInStock: 5,
  },
  {
    title: 'Sample Product 3',
    description: 'Yet another sample product',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
    category: 'Clothing',
    countInStock: 20,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Sample products seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed(); 