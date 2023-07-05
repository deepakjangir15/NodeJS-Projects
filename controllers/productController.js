const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { attachCookiesToResponse, createTokenUser } = require("../utils");

const createProduct = async (req, res) => {
  return res.send("createProduct");
};

const getAllProducts = async (req, res) => {
  return res.send("getAllProducts");
};

const getSingleProduct = async (req, res) => {
  return res.send("getSingleProduct");
};

const updateProduct = async (req, res) => {
  return res.send("updateProduct");
};

const deleteProduct = async (req, res) => {
  return res.send("deleteProduct");
};

const uploadImage = async (req, res) => {
  return res.send("uploadImage");
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
