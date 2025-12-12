import { Router } from 'express';
import authorization from '../middlewares/authorization.js';
import * as authenticationController from '../controllors/authenticationController.js';
import * as userController from '../controllors/userController.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio API' });
});

router.post("/login", authenticationController.login);

router.post("/logout", authorization, authenticationController.logout);

router.get("/protected", authorization, authenticationController.protectedRoute);

router.get("/users", authorization, userController.getAllUsers);

export default router;