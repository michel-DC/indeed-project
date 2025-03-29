import React from "react";

interface Country {
  country: string;
  percent: number;
}

interface ReadOnlyCountryTableProps {
  label: string;
  data: Country[];
}

const ReadOnlyCountryTable: React.FC<ReadOnlyCountryTableProps> = ({ label, data }) => {
  return (
    <div className="py-4">
      <span className="text-gray-600">{label}:</span>
      <table className="border-collapse border border-gray-400 mt-2 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Country</th>
            <th className="border border-gray-400 px-4 py-2">Percent</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-400 px-4 py-2">{item.country}</td>
              <td className="border border-gray-400 px-4 py-2">{item.percent}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadOnlyCountryTable;
