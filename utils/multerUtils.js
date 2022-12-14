const multer = require("multer");
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    req.filePath = {
      filePath: `/public/${`user-${
        req.body.productName
      }-${Date.now()}.${ext}`}`,
    };
    cb(null, `user-${req.body.productName}-${Date.now()}.${ext}`);
  },
});
const multerFilter = (req, file, cb) => {
  // filter fn used check if the uploaded file is a image and pass error to the call back fn accordingly
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new appError("uploaded a non image type file", 400), false);
  }
};

module.exports = { multerFilter, multerStorage };
