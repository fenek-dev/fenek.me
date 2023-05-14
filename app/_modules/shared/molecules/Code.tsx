"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Code = ({
  children,
  ...props
}: React.PropsWithChildren<React.ComponentProps<"div">>) => {
  return (
    <div {...props}>
      <SyntaxHighlighter
        language="tsx"
        style={oneDark}
        customStyle={{
          background: "none",
        }}
        codeTagProps={{
          style: {
            background: "none",
          },
        }}
      >
        {children as string}
      </SyntaxHighlighter>
    </div>
  );
};
