import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
const ModuleItem = ({ module, onSelect }) => {
  //Initialisations---------------------------
  //State------------------------
  //Handles------------------------
  //Views------------------------
  return (
    <Pressable onPress={() => onSelect(module)}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgrey",
  },
  text: {
    fontSize: 18,
  },
});

export default ModuleItem;
