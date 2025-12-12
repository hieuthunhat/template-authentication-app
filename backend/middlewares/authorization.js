import jwt from 'jsonwebtoken';

/**
 * Authorization middleware to protect routes
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, "YOUR_SECRET_KEY");
    req.userId = data.id;
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

export default authorization;