const errorHandler = (error, req, res, next) => {
  console.error(error);
  return res.status(400).json({ code: 400, message: error.message });
};

module.exports = { errorHandler };
