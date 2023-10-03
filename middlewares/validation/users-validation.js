import usersSchemas from "../../schemas/users-schemas.js";

import { validateBody } from "../../decorators/index.js";

const userValidate = validateBody(usersSchemas.usersSchema);

const userSubscriptionValidate = validateBody(
  usersSchemas.usersSubscriptionFieldSchema
);

const userEmailValidate = validateBody(usersSchemas.usersEmailSchema);

export default { userValidate, userSubscriptionValidate, userEmailValidate };
