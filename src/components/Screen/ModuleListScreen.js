import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../Layout/Screen";
import ModuleItem from "../entity/modules/ModuleItem.js";

import initialModules from "../../Data/modules.js";

const ModuleListScreen = () => {
  const modules = initialModules;

  const handleSelect = () => alert("Item selected");
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return;
          <ModuleItem module={module} />;
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
