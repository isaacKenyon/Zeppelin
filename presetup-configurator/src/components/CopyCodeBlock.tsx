import React from "react";
import { CopyBlock, a11yLight } from "react-code-blocks";

export default function CopyCodeBlock({ code, language, showLineNumbers, startingLineNumber }) {
  return <CopyBlock
    text={code}
    language={language}
    showLineNumbers={showLineNumbers}
    startingLineNumber={startingLineNumber}
    theme={a11yLight}
    codeBlock
  />;
}
