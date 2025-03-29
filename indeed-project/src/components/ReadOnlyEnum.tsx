import React from "react";
import { formatEnumValue } from "../utils/formatters";

interface ReadOnlyEnumProps {
  label: string;
  value: string;
}

const ReadOnlyEnum: React.FC<ReadOnlyEnumProps> = ({ label, value }) => {
  return (
    <div className="flex items-center space-x-2 py-2">
      <span className="text-gray-600">{label}:</span>
      <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full">
        {formatEnumValue(value)}
      </span>
    </div>
  );
};

export default ReadOnlyEnum;
