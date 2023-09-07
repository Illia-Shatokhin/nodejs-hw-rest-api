import { ctrlWrapper } from "../decorators/index.js";

import {
  addContact,
  getContactById,
  listContacts,
  removeContact,
  updateContactById,
} from "../models/contacts.js";

import { HttpError } from "../helpers/index.js";

export async function getAll(req, res) {
  const result = await listContacts();
  res.json(result);
}

export async function getById(req, res) {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) {
    throw HttpError(404, `contact with id=${id} not found`);
  }
  res.json(result);
}

export async function add(req, res) {
  const result = await addContact(req.body);
  res.status(201).json(result);
}

export async function deleteById(req, res) {
  const { id } = req.params;
  const result = await removeContact(id);
  if (!result) {
    throw HttpError(404, `contact with id=${id} not found`);
  }
  res.json({
    message: "Delete success",
  });
}

export async function updateById(req, res) {
  const { id } = req.params;
  const result = await updateContactById(id, req.body);
  if (!result) {
    throw HttpError(404, `contact with id=${id} not found`);
  }
  res.json(result);
}

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};
