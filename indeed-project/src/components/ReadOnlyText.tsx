import React from "react";

interface ReadOnlyTextProps {
  label: string;
  value: string;
}

const ReadOnlyText: React.FC<ReadOnlyTextProps> = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-600">{label}:</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
};

export default ReadOnlyText;
