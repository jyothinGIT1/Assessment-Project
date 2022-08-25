const jwt = require("jsonwebtoken");

const authenticationMiddleware = (user) => (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("No token provided");
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.role, user);
    if (decoded.role === user) {
      const { name, userId, role } = decoded;
      req.user = { name, userId, role };
      next();
    } else {
      res.status(400).json({
        msg: `you are not authorised to access ${user} page`,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authenticationMiddleware;
