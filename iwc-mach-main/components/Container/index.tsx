import React from "react";

interface ContainerProps {
  children: JSX.Element | React.ReactNode;
  className?: string;
  rowClassName?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "container",
  rowClassName = "",
}: ContainerProps) => {
  return (
    <div className={className}>
      <div className={`row ${rowClassName}`}>{children}</div>
    </div>
  );
};

export default Container;
