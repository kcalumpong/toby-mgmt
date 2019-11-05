const router = require("express").Router();
const empRoutes = require("./employees");

// Employee routes
router.use("/employees", empRoutes);

module.exports = router;
