import Contact from "../models/Contact.js";

import { ctrlWrapper } from "../decorators/index.js";

import { HttpError } from "../helpers/index.js";

async function getAll(req, res) {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
}

async function getById(req, res) {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, `contact with id=${id} not found`);
  }
  res.json(result);
}

async function add(req, res) {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
}

async function deleteById(req, res) {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `contact with id=${id} not found`);
  }
  res.json({
    message: "Delete success",
  });
}

async function updateById(req, res) {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
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
