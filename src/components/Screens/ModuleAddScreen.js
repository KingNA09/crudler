import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const ModuleAddScreen = () => {
  //Initialisations---------------------------
  //State------------------------
  //Handles------------------------
  //Views------------------------
  return (
    <View style={styles.container}>
      <Text>Add</Text>
      <StatusBar style="auto" />
    </View>
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

export default ModuleAddScreen;
