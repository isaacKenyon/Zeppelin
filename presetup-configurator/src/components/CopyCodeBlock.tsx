import React from "react";
import { CopyBlock, a11yLight } from "react-code-blocks";

export default function CopyCodeBlock({ code, language }) {
  return <CopyBlock
    text={code}
    language={language}
    showLineNumbers={false}
    theme={a11yLight}
    codeBlock
  />;
}
