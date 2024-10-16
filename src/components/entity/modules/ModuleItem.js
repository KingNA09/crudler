import { Pressable, StyleSheet, Text, View } from "react-native";

const ModuleItem = (module) => {
  const handleSelect = () => alert("Item selected");
  return (
    <Pressable key={module.ModuleCode} onPress={handleSelect}>
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
    borderBottomWidth: 1,
    borderColor: "white",
  },
  text: {
    fontSize: 18,
  },
});

export default ModuleItem;
