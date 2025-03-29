import React from "react";
import { formatBoolean } from "../utils/formatters";

interface ReadOnlyBooleanProps {
  label: string;
  value: string;
}

const ReadOnlyBoolean: React.FC<ReadOnlyBooleanProps> = ({ label, value }) => {
  return (
    <div className="flex items-center space-x-2 py-2">
      <span className="text-gray-600">{label}:</span>
      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
        {formatBoolean(value)}
      </span>
    </div>
  );
};

export default ReadOnlyBoolean;
