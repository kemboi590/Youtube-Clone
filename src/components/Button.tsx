import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      // a way to define different styles/versions for the button
      // styles of the buttons
      default: ["bg-secondary", "hover: bg-secondary-hover"],
      ghost: ["hover: bg-gray-100"],
      dark: ["bg-secondary-dark", "hover: bg-secondary-dark-hover", "text-secondary" ],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "item-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">; // combining 2 types to create a new type in TS
export default function Button({
  variant,
  size,
  className, //will be used to add additional classes to the button
  ...props
}: ButtonProps) {
  //destructuring the props from the ButtonProps type
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)} //twMerge is a function that merges the classes, an example in this line of code is the buttonStyles({ variant, size }) which is an object that contains the classes for the button
    />
  );
}
