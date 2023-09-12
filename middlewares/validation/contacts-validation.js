import contactsSchemas from "../../schemas/contacts-schemas.js";

import { validateBody } from "../../decorators/index.js";

const addContactvalidate = validateBody(contactsSchemas.contactsSchema);
const updateContactValidate = validateBody(contactsSchemas.contactsSchema);
const updateContactValidateFavoriteField = validateBody(
  contactsSchemas.contactsFavoriteFieldSchema
);

export default {
  addContactvalidate,
  updateContactValidate,
  updateContactValidateFavoriteField,
};
