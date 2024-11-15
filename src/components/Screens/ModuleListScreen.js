import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../Data/modules";
import ModuleList from "../entity/modules/ModuleList.js";
import RenderCount from "../UI/RenderCount.js";
const ModuleListScreen = ({ navigation }) => {
  //Initialisations--------------------------
  //State------------------------
  const [modules, setModules] = useState(initialModules);
  //Handles------------------------
  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  };

  const handleSelect = (module) => {
    navigation.navigate("ModuleViewScreen", { module });
  };

  //Views------------------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
