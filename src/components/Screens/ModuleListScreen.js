import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
export const ModuleListScreen = () => {
  //Initialisations---------------------------
  //State------------------------
  //Handles------------------------
  //Views------------------------
  return (
    <Screen>
      <Text>List</Text>
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
