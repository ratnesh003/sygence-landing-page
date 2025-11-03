import clsx from "clsx";
import React from "react";

type BorderProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Border = React.forwardRef<HTMLDivElement, BorderProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(
          "px-5 py-16 md:px-18 md:py-24 xl:px-20 xl:py-28",
          className
        )}
        {...restProps}
      >
        <div className="mx-auto w-full">
          {children}
        </div>
      </Comp>
    );
  }
);

Border.displayName = "Border";

export default Border;
