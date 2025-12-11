import { Router } from 'express';
import jwt from 'jsonwebtoken';
import authorization from '../middlewares/authorization.js';
const router = Router();

import accounts from '../consts/sampleData.js';

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio API' });
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = accounts.find(
        (acc) => acc.username === username && acc.password === password
    );

    if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

  const token = jwt.sign({ id: user.id, role: user.role }, "YOUR_SECRET_KEY");
  return res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json({ 
      message: "Logged in successfully 😊 👌",
      user: { id: user.id, role: user.role, username: user.username }
    });
});

router.post("/logout", authorization, (req, res) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
});

router.get("/protected", authorization, (req, res) => {
  return res.json({ user: { id: req.userId, role: req.userRole } });
});

export default router;