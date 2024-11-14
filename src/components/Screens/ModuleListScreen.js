import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";

import initialModules from "../../Data/module.js";

export const ModuleListScreen = () => {
  //Initialisations--------------------------
  const modules = initialModules;
  //State------------------------
  //Handles------------------------
  //Views------------------------
  return (
    <Screen>
      {modules.map((module) => {
        return (
          <View>
            <Text>
              {module.ModuleCode} {module.ModuleName}
            </Text>
          </View>
        );
      })}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModuleListScreen;
