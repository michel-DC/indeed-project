import React from "react";

interface ReadOnlyArrayProps {
  label: string;
  items: string[];
}

const ReadOnlyArray: React.FC<ReadOnlyArrayProps> = ({ label, items }) => (
  <div className="py-2">
    <span className="text-gray-600">{label}:</span>
    <div className="flex gap-2 flex-wrap mt-1">
      {items.length > 0 ? (
        items.map((item, index) => (
          <span key={index} className="px-3 py-1 bg-green-200 text-green-800 rounded-full">
            {item}
          </span>
        ))
      ) : (
        <span className="text-gray-400">No data available</span>
      )}
    </div>
  </div>
);

export default ReadOnlyArray;
