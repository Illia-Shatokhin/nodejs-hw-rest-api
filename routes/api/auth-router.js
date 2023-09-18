import { Router } from "express";

import usersValidation from "../../middlewares/validation/users-validation.js";

import userController from "../../controllers/users-controller.js";

import { authenticate } from "../../middlewares/index.js";

const authRouter = Router();

authRouter.post(
  "/register",
  usersValidation.userValidate,
  userController.register
);

authRouter.post("/login", usersValidation.userValidate, userController.login);

authRouter.get("/current", authenticate, userController.getCurrent);

authRouter.post("/logout", authenticate, userController.logout);

authRouter.patch(
  "/",
  authenticate,
  usersValidation.userSubscriptionValidate,
  userController.subscriptionUpdate
);

export default authRouter;
