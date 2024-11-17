import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button, ButtonTray } from "./Button.js";
import Icons from "./Icons.js";
import { SelectList } from "react-native-dropdown-select-list";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  //Intialisation----------------------------------------------------------------
  //State------------------------------------------------------------------------
  //Handles------------------------------------------------------------------------
  //Views------------------------------------------
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <ScrollView contentContainerStyle={styles.formItems}>
        {children}
      </ScrollView>

      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onClick={onSubmit} />
        <Button label="Cancel" icon={<Icons.Delete />} onClick={onCancel} />
      </ButtonTray>
    </KeyboardAvoidingView>
  );
};

const InputText = ({ label, value, onChange }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.itemTextInput}
      />
    </View>
  );
};

const InputSelect = ({ label, prompt, options, value, onChange }) => {
  const selectListData = options.map((option) => ({
    key: option.value,
    value: option.label,
  }));

  const handleChange = (selectedLabel) => {
    const selectedOption = options.find(
      (option) => option.label === selectedLabel
    );
    onChange(selectedOption.value);
  };

  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <SelectList
        setSelected={handleChange}
        data={selectListData}
        placeholder={prompt}
        defaultOption={selectListData.find((item) => item.key === value)}
        boxStyles={styles.selectListBoxStyle}
        dropdownStyles={styles.selectListDropdownStyle}
        save="value"
      />
    </View>
  );
};

Form.InputText = InputText;
Form.InputSelect = InputSelect;

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
  },
  formItems: {
    gap: 10,
  },
  itemLabel: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "grey",
  },
  selectListBoxStyle: {
    height: 50,
    backgroundColor: "whitesmoke",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgrey",
    paddingLeft: 10,
    paddingTop: 15,
  },
  selectListDropdownStyle: {
    borderColor: "lightgrey",
  },
});

export default Form;
