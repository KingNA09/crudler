import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen.js";
import ModuleForm from "../entity/modules/ModuleForm";
const ModuleModifyScreen = ({ navigation, route }) => {
  //Initialisations---------------------------
  const { module, onModify } = route.params;
  //State------------------------
  //Handles------------------------
  const handleCancel = () => navigation.goBack();
  //Views------------------------
  return (
    <Screen>
      <ModuleForm
        originalModule={module}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleModifyScreen;
