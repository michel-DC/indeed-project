import React from "react";
// import { formatMultiEnumValues } from "../utils/formatters";

interface ReadOnlyMultiEnumProps {
  label: string;
  values: string[];
}

const ReadOnlyMultiEnum: React.FC<ReadOnlyMultiEnumProps> = ({ label, values }) => {
  return (
    <div className="py-2">
      <span className="text-gray-600">{label}:</span>
      <div className="flex flex-wrap gap-2 mt-1">
        {values.length > 0 ? (
          values.map((val, index) => (
            <span key={index} className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full">
              {val}
            </span>
          ))
        ) : (
          <span className="text-gray-500">N/A</span>
        )}
      </div>
    </div>
  );
};

export default ReadOnlyMultiEnum;
