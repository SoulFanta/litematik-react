import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useId,
} from "react";
import "./style.scss";
import { cn } from "~/shared/lib/cn";

export type InputProps = {
  label?: string;
  helperText?: string;
  error?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "filled";
  fullWidth?: boolean;
  containerClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftSlot,
      rightSlot,
      size = "md",
      variant = "outline",
      fullWidth,
      className,
      containerClassName,
      id,
      required,
      disabled,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const inputId = id ?? `ui-input-${autoId}`;
    const helpId = error || helperText ? `${inputId}-help` : undefined;

    const controlMods = cn(
      "ui-input__control",
      `ui-input--${variant}`,
      `ui-input--${size}`,
      leftSlot && "has-left",
      rightSlot && "has-right",
      error && "is-error",
      disabled && "is-disabled"
    );

    return (
      <div
        className={cn(
          "ui-input",
          fullWidth && "ui-input--full",
          containerClassName
        )}
      >
        {label && (
          <label className="ui-input__label" htmlFor={inputId}>
            {label}
            {required && <span className="ui-input__req">*</span>}
          </label>
        )}

        <div className={controlMods}>
          {leftSlot && (
            <div className="ui-input__slot ui-input__slot--left">
              {leftSlot}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            className={cn("ui-input__field", className)}
            aria-invalid={!!error || undefined}
            aria-describedby={helpId}
            required={required}
            disabled={disabled}
            {...rest}
          />

          {rightSlot && (
            <div className="ui-input__slot ui-input__slot--right">
              {rightSlot}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <div
            id={helpId}
            className={cn("ui-input__help", error && "is-error")}
          >
            {error ?? helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
