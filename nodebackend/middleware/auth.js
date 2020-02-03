const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //Get token from the header
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    //User we assigned in the payload
    req.user = decoded.user;
    next();
  } catch (er) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
