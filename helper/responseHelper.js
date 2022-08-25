const successResponse = (res, data = {}, message = "success") => {
  return res.status(200).json({ message, data });
};

module.exports = { successResponse };
