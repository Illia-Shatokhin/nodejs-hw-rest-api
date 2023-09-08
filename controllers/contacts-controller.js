import Contact from "../models/Contact.js";

import { ctrlWrapper } from "../decorators/index.js";

import { HttpError } from "../helpers/index.js";

export async function getAll(req, res) {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
}

export async function getById(req, res) {
  const { id } = req.params;
  const result = await Contact.findById(id);
  console.log(id);
  console.log(result);
  if (!result) {
    console.log("error");
    throw HttpError(404, `contact with id=${id} not found`);
  }
  res.json(result);
}

export async function add(req, res) {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
}

export async function deleteById(req, res) {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `contact with id=${id} not found`);
  }
  res.json({
    message: "Delete success",
  });
}

export async function updateById(req, res) {
  const { id } = req.params;
  console.log(id);
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  console.log(result);
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
