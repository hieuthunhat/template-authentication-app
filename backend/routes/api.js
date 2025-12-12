import { Router } from 'express';
import authorization from '../middlewares/authorization.js';
import authenticationController from '../controllors/authenticationController.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio API' });
});

router.post("/login", authenticationController.login);

router.post("/logout", authorization, authenticationController.logout);

router.get("/protected", authorization, authenticationController.protectedRoute);

export default router;