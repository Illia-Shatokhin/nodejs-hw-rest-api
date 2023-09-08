import { Router } from "express";

import {
  getAll,
  // getById,
  // add,
  // deleteById,
  // updateById,
} from "../../controllers/contacts-controller.js";

import contactsValidation from "../../middleware/validation/contacts-validation.js";

const router = Router();

router.get("/", getAll);

// router.get("/:id", getById);

// router.post("/", contactsValidation.addContactvalidate, add);

// router.put("/:id", contactsValidation.updateContactValidate, updateById);

// router.delete("/:id", deleteById);

export default router;
