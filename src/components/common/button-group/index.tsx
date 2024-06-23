import { Button } from "@/components/ui/button";
import { SignInResponse } from "next-auth/react";
import { useTranslations } from "next-intl";
import * as React from "react";

type ButtonVariants =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost";

interface IButtonGroup {
  children?: React.ReactNode;
  array?: {
    onClick: () => Promise<SignInResponse | undefined>;
    icon: React.ReactNode;
    title?: string;
  }[];
  variant?: ButtonVariants;
  className?: string;
  disabled?: boolean;
}

const ButtonGroup: React.FC<IButtonGroup> = ({ children, array, variant = "default", className = "",  disabled = false }) =>{
  const t = useTranslations();
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`flex gap-2 flex-wrap ${className}`}>
      {childrenArray.map((child, index) =>
        React.isValidElement(child) ? (
          <Button
            key={`child-${index}`}
            variant={variant}
            disabled={disabled}
            {...child.props}
          />
        ) : null
      )}
      {array &&
        array.map((item, index) => (
          <Button
            key={item.title ?? index}
            variant={variant}
            disabled={disabled}
            onClick={item.onClick}
          >
            {item.icon}
            {item.title && <span className="ml-2">{t(item.title)}</span>}
          </Button>
        ))}
    </div>
  );
}

export default ButtonGroup;
