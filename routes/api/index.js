const router = require("express").Router();
const authRoutes = require('./auth');

const empRoutes = require("./employees");

// Auth routes
router.use('/auth', authRoutes);

// Employee routes
router.use("/employees", empRoutes);

module.exports = router;
