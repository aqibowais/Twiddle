import React, { useState } from "react";
import CopyButton from "./CopyButton";

const CodeSnippet = ({ code }) => {



  return (
    <div
      className="bg-slate-100 relative   p-4 rounded-lg mt-3 w-full  mx-auto" // Limited width with 'max-w-md' and centered using 'mx-auto'
    >
      <pre className="text-sm md:text-base lg:text-lg text-gray-800  whitespace-pre-wrap break-words">
        {code}
      </pre>
    <div className="absolute top-2 right-2">
        <CopyButton code={code}/>
    </div>
    </div>
  );
};

export default CodeSnippet;