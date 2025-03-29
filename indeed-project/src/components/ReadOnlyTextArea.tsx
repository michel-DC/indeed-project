import React from "react";

interface ReadOnlyTextAreaProps {
  label: string;
  value: string;
}

const ReadOnlyTextArea: React.FC<ReadOnlyTextAreaProps> = ({ label, value }) => (
  <div className="py-2">
    <span className="text-gray-600">{label}:</span>
    <p className="border p-2 bg-gray-100 rounded">{value}</p>
  </div>
);

export default ReadOnlyTextArea;
