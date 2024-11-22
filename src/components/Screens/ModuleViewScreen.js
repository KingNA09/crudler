import { StyleSheet } from "react-native";
import Screen from "../layout/Screens.js";
import ModuleView from "../entity/modules/ModuleView";

const ModuleViewScreen = ({ navigation, route }) => {
  //Initialisations---------------------------
  const { module, onDelete, onModify } = route.params;
  //State------------------------
  //Handles------------------------
  const gotoModifyScreen = () =>
    navigation.navigate("ModuleModifyScreen", { module, onModify });
  //Views------------------------
  return (
    <Screen>
      <ModuleView
        module={module}
        onDelete={onDelete}
        onModify={gotoModifyScreen}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
