const multer = require("multer");
const { multerStorage, multerFilter } = require("../utils/multerUtils");

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
const multerMiddleware = upload.single("photo");

module.exports = {
  multerMiddleware,
};
