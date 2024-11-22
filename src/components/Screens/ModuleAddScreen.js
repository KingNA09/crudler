import Screen from "../layout/Screens.js";
import { StyleSheet, View } from "react-native";
import ModuleForm from "../entity/modules/ModuleForm.js";
const ModuleAddScreen = ({ navigation, route }) => {
  //Initialisations---------------------------
  const { onAdd } = route.params;
  //State------------------------
  //Handles------------------------
  const handleCancel = navigation.goBack;
  //Views------------------------
  return (
    <Screen>
      <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
