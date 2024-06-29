import React, { HTMLInputTypeAttribute } from "react";

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  props?: HTMLInputTypeAttribute;
}

const Button = ({ className, children, ...props }: IButtonProps) => {
  return (
    <button
      className={`font-opensans bg-accent text-white rounded py-1 px-2 lg:py-2 lg:px-6 duration-300 hover:opacity-85 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
