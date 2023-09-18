import usersSchemas from "../../schemas/users-schemas.js";

import { validateBody } from "../../decorators/index.js";

const userValidate = validateBody(usersSchemas.usersSchema);

const userSubscriptionValidate = validateBody(
  usersSchemas.usersSubscriptionFieldSchema
);

export default { userValidate, userSubscriptionValidate };
