import React, { HTMLInputTypeAttribute } from "react";
import { cn } from "../utils/helpers";

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  props?: HTMLInputTypeAttribute;
}

const Button = ({ className, children, ...props }: IButtonProps) => {
  return (
    <button
      className={cn(
        "bg-accent text-white rounded py-2 px-7 duration-300 hover:opacity-85",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
