import React, { forwardRef } from "react";
import classname from "classnames";

import styles from "@ds-test/styles/Button.module.scss";

type ButtonProps = {
  variant?: "primary" | "secondary" | "destructive";
  size?: "small" | "large" | "medium";
  value?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "large", value, className, ...props },
    ref
  ): JSX.Element => (
    <button
      ref={ref}
      className={classname(
        styles["ds-button"],
        styles[variant],
        styles[size],
        className
      )}
      {...props}
    >
      {value}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
