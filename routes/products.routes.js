// post.routes.js

const express = require('express');
const router = express.Router();
// const ObjectId = require('mongodb').ObjectId;
const { getAll, getRandom, getItem, postItem, putItem, deleteItem } = require('../controllers/products.controller');

// router.get('/products', (req, res) => {
//   req.db.collection('products').find().toArray((err, data) => {

//     if (err) res.status(500).json({ message: err });
//     else res.json(data);
//   });
// });

// router.get('/products', async (req, res) => {
//   try {
//     res.json(await Product.find());
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// });

router.get('/products', getAll);

// router.get('/products/random', (req, res) => {
//   req.db.collection('products').aggregate([{ $sample: { size: 1 } }]).toArray((err, data) => {

//     if (err) res.status(500).json({ message: err });
//     else res.json(data[0]);
//   });
// });

// router.get('/products/random', async (req, res) => {
//   try {
//     const count = await Product.countDocuments();
//     const rand = Math.floor(Math.random() * count);
//     const dep = await Product.findOne().skip(rand);
//     if (!dep) res.status(404).json({ message: 'Not found ..' });
//     else res.json(dep);
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// });

router.get('/products/random', getRandom);

// router.get('/products/:id', (req, res) => {
//   req.db.collection('products').findOne({ _id: ObjectId(req.params.id) }, (err, data) => {

//     if (err) res.status(500).json({ message: err });
//     else if (!data) res.status(404).json({ message: 'Not found' });
//     else res.json(data);
//   });
// });

// router.get('/products/:id', async (req, res) => {
//   try {
//     const dep = await Product.findById(req.params.id);
//     if (!dep) res.status(404).json({ message: 'Not found' });
//     else res.json(dep);
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// });

router.get('/products/:id', getItem);

// router.post('/products', (req, res) => {
//   const { name, client } = req.body;
//   req.db.collection('products').insertOne({ name: name, client: client }, (err) => {

//     if (err) res.status(500).json({ message: err });
//     else res.json({ message: 'OK' });
//   });
// });

// router.post('/products', async (req, res) => {
//   try {
//     const { name, client } = req.body;
//     const newProduct = new Product({ name: name, client: client });
//     await newProduct.save();
//     res.json({ message: 'OK ' });
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// });

router.post('/products', postItem);

// router.put('/products/:id', (req, res) => {
//   const { name, client } = req.body;
//   req.db.collection('products').updateOne({ _id: ObjectId(req.params.id) },
//     { $set: { name: name, client: client } }, (err) => {

//       if (err) res.status(500).json({ message: err });
//       else res.json({ message: 'OK' });
//     });
// });

// router.put('/products/:id', async (req, res) => {
//   try {
//     const { name, client } = req.body;
//     const dep = await Product.findById(req.params.id);
//     if (dep) {
//       await Product.updateOne(
//         { _id: req.params.id },
//         {
//           $set: { name: name, client: client },
//         }
//       );
//       res.json({ message: 'OK ' });
//     } else res.status(404).json({ message: 'Not found ...' });
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// });

router.put('/products/:id', putItem);

// router.delete('/products/:id', (req, res) => {
//   req.db.collection('products').deleteOne({ _id: ObjectId(req.params.id) }, (err) => {

//     if (err) res.status(500).json({ message: err });
//     else res.json({ message: 'OK ' });
//   });
// });

// router.delete('/products/:id', async (req, res) => {
//   try {
//     const dep = await Product.findById(req.params.id);
//     if (dep) {
//       await Product.remove(dep);
//       res.json({ message: 'OK' });
//     } else res.status(404).json({ message: 'Not found.. ' });
//   } catch (err) {
//     req.status(500).json({ message: err });
//   }
// });

router.delete('/products/:id', deleteItem);

module.exports = router;
