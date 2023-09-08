import { Router } from "express";

import contactsValidation from "../../middlewares/validation/contacts-validation.js";

import { isValidId } from "../../middlewares/validation/index.js";

import {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} from "../../controllers/contacts-controller.js";

const router = Router();

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/", contactsValidation.addContactvalidate, add);

router.put(
  "/:id",
  isValidId,
  contactsValidation.updateContactValidate,
  updateById
);

router.patch(
  "/:id/favorite",
  isValidId,
  contactsValidation.updateContactValidateFavoriteField,
  updateById
);

router.delete("/:id", isValidId, deleteById);

export default router;
