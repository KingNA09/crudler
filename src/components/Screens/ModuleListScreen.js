import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../Data/modules";
import ModuleList from "../entity/modules/ModuleList.js";
import RenderCount from "../UI/RenderCount.js";
const ModuleListScreen = () => {
  //Initialisations--------------------------
  //State------------------------
  const [modules, setModules] = useState(initialModules);
  //Handles------------------------
  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  };

  //Views------------------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
