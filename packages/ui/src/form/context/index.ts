"use client";

import { createContext } from "react";
import type { FormFieldContextValue, FormItemContextValue } from "../type";

export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);
