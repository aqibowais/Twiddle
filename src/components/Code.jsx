import React from "react";
import CopyButton from "./CopyButton";

const Code = ({ req, endpoint }) => {
  return (
    <div className="bg-slate-50 text-white rounded-lg p-4  w-full max-w-max overflow-hidden">
      <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4">
        <span className="flex gap-4 w-full">
          <span className="shrink-0 text-gray-500">{req}</span>
          <span className="flex-1 text-yellow-500 overflow-hidden break-all">{endpoint}</span>
        </span>

        <CopyButton code={endpoint} />
      </code>
      
     
    </div>
  );
};

export default Code;