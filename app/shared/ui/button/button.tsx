import React, { type ElementType, type ReactNode } from "react";
import "./button.scss";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  className?: string;
  children?: ReactNode;
};

type PolymorphicProps<C extends ElementType> = {
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, "as"> & BaseProps;

export default function Button<C extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  fullWidth,
  loading,
  leftSlot,
  rightSlot,
  className,
  children,
  ...rest
}: PolymorphicProps<C>) {
  const Comp = (as || "button") as ElementType;

  const cls = [
    "ui-button",
    `ui-button--${variant}`,
    `ui-button--${size}`,
    fullWidth && "ui-button--full",
    loading && "is-loading",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const ariaBusy = loading ? { "aria-busy": true, "aria-disabled": true } : {};

  return (
    <Comp className={cls} {...ariaBusy} {...(rest as any)}>
      {loading && <span className="ui-button__spinner" aria-hidden="true" />}
      {leftSlot && <span className="ui-button__slot ui-button__slot--left">{leftSlot}</span>}
      <span className="ui-button__label">{children}</span>
      {rightSlot && <span className="ui-button__slot ui-button__slot--right">{rightSlot}</span>}
    </Comp>
  );
}
