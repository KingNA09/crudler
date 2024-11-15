import { ScrollView, StyleSheet } from "react-native";
import ModuleItem from "./ModuleItem.js";
const ModuleList = ({ modules, onSelect }) => {
  //Initialisations---------------------------
  //State------------------------
  //Handles------------------------
  const handleSelect = (module) => {
    onSelect(module);
  };
  //Views------------------------
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {modules.map((module) => {
        return (
          <ModuleItem
            key={module.ModuleCode}
            module={module}
            onSelect={handleSelect}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ModuleList;
