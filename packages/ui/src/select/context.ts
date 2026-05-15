import * as React from "react";

import type { SelectContextValue } from "./type";

const SelectContext = React.createContext<SelectContextValue | null>(null);

export { SelectContext };
