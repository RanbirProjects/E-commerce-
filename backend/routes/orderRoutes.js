const express = require('express');
const {
  createOrder,
  getUserOrders,
  getAllOrders,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createOrder);
router.get('/user/:userId', protect, getUserOrders);
router.get('/', protect, admin, getAllOrders); // For admin

module.exports = router; 