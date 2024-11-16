import { useState } from "react";
import Screen from "../layout/Screen.js";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const defaultModule = {
  ModuleID: null,
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null,
};
const ModuleAddScreen = ({ navigation, route }) => {
  //Initialisations---------------------------
  const { onAdd } = route.params;
  (defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000)),
    (defaultModule.ModuleImage =
      "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg");
  //State------------------------
  const [module, setModule] = useState(defaultModule);
  //Handles------------------------
  const handleAdd = () => onAdd(module);
  const handleCancel = navigation.goBack;

  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });
  //Views------------------------
  return (
    <Screen>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module code</Text>
        <TextInput
          value={module.ModuleCode}
          onChangeText={(value) => handleChange("ModuleCode", value)}
          style={styles.ItemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module name</Text>
        <TextInput
          value={module.ModuleName}
          onChangeText={(value) => handleChange("ModuleName", value)}
          style={styles.ItemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module Level</Text>
        <TextInput
          value={module.ModuleLevel}
          onChangeText={(value) => handleChange("ModuleLevel", value)}
          style={styles.ItemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module leader</Text>
        <TextInput
          value={module.ModuleLeaderName}
          onChangeText={(value) => handleChange("ModuleLeaderName", value)}
          style={styles.ItemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module Image URL</Text>
        <TextInput
          value={module.ModuleImage}
          onChangeText={(value) => handleChange("ModuleImage", value)}
          style={styles.ItemTextInput}
        />
      </View>

      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  ItemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "grey",
  },
});

export default ModuleAddScreen;
