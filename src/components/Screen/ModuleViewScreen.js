import { StyleSheet } from "react-native";
import Screen from "../Layout/Screen";
import ModuleView from "../entity/modules/ModuleView";

const ModuleViewScreen = ({ route }) => {
  const { module } = route.params;

  return (
    <Screen>
      <ModuleView module={module} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
