import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../Layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";
import RenderCount from "../UI/RenderCount.js";

import initialModules from "../../Data/modules.js";

const ModuleListScreen = ({ navigation }) => {
  //State----------------------------------------------------------------
  const [modules, setModules] = useState(initialModules);

  //Handles----------------------------------------------------------------
  const handleselect = (module) =>
    navigation.navigate("ModuleViewScreen", { module });

  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  //Views----------------------------------------------------------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleselect} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
