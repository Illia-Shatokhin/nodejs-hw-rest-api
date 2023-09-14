import usersSchemas from "../../schemas/users-schemas.js";

import { validateBody } from "../../decorators/index.js";

const userValidate = validateBody(usersSchemas.usersSchema);

export default { userValidate };
