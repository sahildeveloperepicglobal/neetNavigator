import React from "react";

interface HTMLViewProps {
  children: string;
}

const HTMLView = ({ children }: HTMLViewProps) => {
  if (typeof children !== "string") {
    throw Error("Expected html string");
  }

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    />
  );
};
export default HTMLView;
