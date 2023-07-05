const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");

router
  .route("/")
  .get(authenticateUser, getAllProducts)
  .post(
    authenticateUser,
    authorizePermissions("admin", "owner"),
    createProduct
  );

router
  .route("/:id")
  .get(authenticateUser, getSingleProduct)
  .patch(
    authenticateUser,
    authorizePermissions("admin", "owner"),
    updateProduct
  )
  .delete(
    authenticateUser,
    authorizePermissions("admin", "owner"),
    deleteProduct
  );

router
  .route("/uploadImage")
  .post(authenticateUser, authorizePermissions("admin", "owner"), uploadImage);

module.exports = router;
