import { Router } from "express";

import usersValidation from "../../middlewares/validation/users-validation.js";

import userController from "../../controllers/users-controller.js";

import { authenticate, upload } from "../../middlewares/index.js";

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

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  userController.updateAvatar
);

authRouter.get("/verify/:verificationToken", userController.verify);

authRouter.post(
  "/verify",
  usersValidation.userEmailValidate,
  userController.resendVerifyEmail
);

export default authRouter;
