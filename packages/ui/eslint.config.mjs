import path from "node:path";
import { fileURLToPath } from "node:url";

import { createWorkspaceTsConfig } from "../../eslint.shared.js";

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default createWorkspaceTsConfig({
  tsconfigRootDir,
});
