import { StatusBar } from "expo-status-bar";
import Screen from "../layout/Screen.js";
import { StyleSheet, Text, View } from "react-native";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const defaultModule = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleCode: "CI6330",
  ModuleName: "Mobile Application Development",
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: "Graeme Jones",
  ModuleImage:
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
};
const ModuleAddScreen = ({ navigation, route }) => {
  //Initialisations---------------------------
  const { onAdd } = route.params;
  //State------------------------
  //Handles------------------------
  const handleAdd = () => onAdd(defaultModule);
  const handleCancel = navigation.goBack;
  //Views------------------------
  return (
    <Screen>
      <Text>Add</Text>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
