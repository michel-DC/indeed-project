import React from "react";
import ReadOnlyText from "./components/ReadOnlyText";
// import ReadOnlyEnum from "./components/ReadOnlyEnum";
import ReadOnlyMultiEnum from "./components/ReadOnlyMultiEnum";
import ReadOnlyBoolean from "./components/ReadOnlyBoolean";
import ReadOnlyCountryTable from "./components/ReadOnlyCountryTable";
import './App.css';

const App: React.FC = () => {
  const formData = {
    user: {
      name: "John Doe",
      description: "Experienced software engineer"
    },
    item: {
      contractProviders: ["vendor"],
      isStudent: "no",
      workCountries: [
        { country: "France", percent: 50 },
        { country: "USA", percent: 30 }
      ]
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Read-Only Form</h1>

      <div className="border p-4 my-4">
        <h2 className="font-bold">My User</h2>
        <ReadOnlyText label="Name" value={formData.user.name} />
        <ReadOnlyText label="Description of your skills" value={formData.user.description} />
      </div>

      <div className="border p-4 my-4">
        <h2 className="font-bold">Profile</h2>
        <ReadOnlyMultiEnum label="Who provides the contract?" values={formData.item.contractProviders} />
        <ReadOnlyBoolean label="Are you currently student?" value={formData.item.isStudent} />
        <ReadOnlyCountryTable label="In which countries did you work / How long (in percent)?" data={formData.item.workCountries} />
      </div>
    </div>
  );
};

export default App;
