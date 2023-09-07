import contactsSchemas from "../../schemas/contacts-schemas.js";

import { validateBody } from "../../decorators/index.js";

const addContactvalidate = validateBody(contactsSchemas.contactsSchema);
const updateContactValidate = validateBody(contactsSchemas.contactsSchema);

export default {
  addContactvalidate,
  updateContactValidate,
};
