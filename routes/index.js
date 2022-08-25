const express = require("express");
const router = express.Router();
const userRoute = require("../modules/user/userRoute");
const adminRoute = require("../modules/admin/adminRoute");
const productRoute = require("../modules/product/productRoute");

router.use("/user", userRoute);
router.use("/admin", adminRoute);
router.use("/product", productRoute);

module.exports = router;
