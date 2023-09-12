import { Router } from "express";

import contactsValidation from "../../middlewares/validation/contacts-validation.js";

import { isValidId } from "../../middlewares/validation/index.js";

import contactController from "../../controllers/contacts-controller.js";

const router = Router();

router.get("/", contactController.getAll);

router.get("/:id", isValidId, contactController.getById);

router.post("/", contactsValidation.addContactvalidate, contactController.add);

router.put(
  "/:id",
  isValidId,
  contactsValidation.updateContactValidate,
  contactController.updateById
);

router.patch(
  "/:id/favorite",
  isValidId,
  contactsValidation.updateContactValidateFavoriteField,
  contactController.updateById
);

router.delete("/:id", isValidId, contactController.deleteById);

export default router;
