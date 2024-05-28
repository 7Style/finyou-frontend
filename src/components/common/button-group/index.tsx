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

interface ButtonGroupProps {
  readonly children?: React.ReactNode;
  readonly array?: {
    onClick: () => Promise<SignInResponse | undefined>;
    icon: React.ReactNode;
    title?: string;
  }[];
  readonly variant?: ButtonVariants | undefined;
  readonly className?: string;
  readonly disabled?: boolean;
}

function ButtonGroup({
  children,
  array,
  variant,
  className,
  disabled,
  ...props
}: ButtonGroupProps): JSX.Element {
  const t = useTranslations("page.auth.common");
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`flex space-x-2 ${className}`}>
      {childrenArray.map((child, index) => (
        <Button {...props} key={index} variant={variant} disabled={disabled}>
          {child}
        </Button>
      ))}
      {array &&
        array.map((item, index) => (
          <Button
            {...props}
            key={index}
            onClick={item.onClick}
            variant={variant}
            disabled={disabled}
          >
            {item.icon}
            {item.title && <span className="ml-2">{t(item.title)}</span>}
          </Button>
        ))}
    </div>
  );
}

export { ButtonGroup };
