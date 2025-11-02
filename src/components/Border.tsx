import clsx from "clsx";
import React from "react";

type BorderProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

const Border = React.forwardRef<HTMLDivElement, BorderProps>(
    ({ as: Comp = "section", className, children, ...restProps}, ref) => {
        return (
            <Comp ref={ref} className ={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)} {...restProps}>
                <div className="mx-auto w-full max-w-7xl">
                {children}
                </div>
            </Comp>
        )
    }
)

Border.displayName = "Border"

export default Border