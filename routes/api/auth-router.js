import { Router } from "express";

import usersValidation from "../../middlewares/validation/users-validation.js";

import userController from "../../controllers/users-controller.js";

const authRouter = Router();

authRouter.post(
  "/register",
  usersValidation.userValidate,
  userController.register
);

authRouter.post("/login", usersValidation.userValidate, userController.login);

export default authRouter;
