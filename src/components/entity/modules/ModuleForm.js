import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import useLoad from "../../API/useLoad.js";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";
import { Button, ButtonTray } from "../../UI/Button.js";

const defaultModule = {
  ModuleID: null,
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleYearID: null,
  ModuleLeaderID: null,
  ModuleImageURL: null,
};

const yearsEndpoint = "https://softwarehub.uk/unibase/api/years";

const staffEndpoint = "https://softwarehub.uk/unibase/api/users/staff";

const levels = [
  { value: 3, label: "3 (Foundation)" },
  { value: 4, label: "4 (First year)" },
  { value: 5, label: "5 (Second year)" },
  { value: 6, label: "6 (Final year)" },
  { value: 7, label: "7 (Masters)" },
];
const ModuleForm = ({ originalModule, onSubmit, onCancel }) => {
  //Initializations---------------------------
  (defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000)),
    (defaultModule.ModuleImageURL =
      "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg");
  //State------------------------
  const [module, setModule] = useState(originalModule || defaultModule);
  const [years, , isYearsLoading] = useLoad(yearsEndpoint);
  const [leaders, , isleadersLoading] = useLoad(staffEndpoint);

  //Handles------------------------
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });

  const handleSubmit = () => {
    onSubmit(module);
  };

  //Views------------------------
  const submitLabel = originalModule ? "Modify" : "Add";
  const submitIcon = originalModule ? <Icons.Edit /> : <Icons.Add />;

  const cohorts = years.map((year) => ({
    value: year.YearID,
    label: year.YearName,
  }));

  const staff = leaders.map((leader) => ({
    value: leader.UserID,
    label: `${leader.UserFirstName}  ${leader.UserLastName}`,
  }));

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="Module code"
        value={module.ModuleCode}
        onChange={(value) => handleChange("ModuleCode", value)}
      />

      <Form.InputText
        label="Module name"
        value={module.ModuleName}
        onChange={(value) => handleChange("ModuleName", value)}
      />

      <Form.InputSelect
        label="Module level"
        prompt="Select Module Level..."
        options={[{ value: null, label: "Select Module Level..." }, ...levels]}
        value={module.ModuleLevel}
        onChange={(value) => handleChange("ModuleLevel", value)}
        style={styles.inputSelect}
      />

      <Form.InputSelect
        label="Module cohorts"
        prompt="Select Module Cohorts..."
        options={[
          { value: null, label: "Select Module Cohorts..." },
          ...cohorts,
        ]}
        value={module.ModuleYearID}
        onChange={(value) => handleChange("ModuleYearID", value)}
        style={styles.inputSelect}
        isLoading={isYearsLoading}
      />
      <Form.InputSelect
        label="Module Leader"
        prompt="Select Module Leader..."
        options={[{ value: null, label: "Select Module Leaders..." }, ...staff]}
        value={module.ModuleLeaderID}
        onChange={(value) => handleChange("ModuleLeaderID", value)}
        isLoading={isleadersLoading}
      />

      <Form.InputText
        label="Module Image URL"
        value={module.ModuleImageURL}
        onChange={(value) => handleChange("ModuleImageURL", value)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default ModuleForm;
