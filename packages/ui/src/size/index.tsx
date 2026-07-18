import * as React from "react";

/** 统一的 size 类型 */
export type Size = "xs" | "sm" | "default" | "lg";

const SizeContext = React.createContext<ConfigType | null>(null);

type ConfigType = {
  size?: Size | null;
};

/**
 * 容器组件使用此 Provider 将 size 透传给所有后代组件。
 * 嵌套 Provider 就近覆盖。
 */
export function ConfigProvider({
  size,
  children,
}: {
  size?: ConfigType["size"];
  children: React.ReactNode;
}) {
  return <SizeContext value={{ size }}>{children}</SizeContext>;
}

/**
 * 叶子组件使用此 hook 解析最终 size。
 * 优先级：组件自身 prop > SizeContext > fallback
 */
export function useConfigProvider(config: ConfigType): ConfigType {
  const ctx = React.useContext(SizeContext) || {};

  const obj = { ...ctx };

  for (const key of Object.keys(config || {}) as Array<keyof ConfigType>) {
    if (config[key] !== undefined) {
      obj[key] = config[key];
    }
  }

  return obj;
}
