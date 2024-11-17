import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import Icons from "../../UI/Icons.js";
import { Button, ButtonTray } from "../../UI/Button";
const ModuleView = ({ module, onDelete, onModify }) => {
  //Initialisations---------------------------
  //State------------------------
  //Handles------------------------
  const handleDelete = () => onDelete(module);

  const requestDelete = () =>
    Alert.alert(
      "Delete module",
      `Are you sure  that you want to delete module ${module.ModuleCode} {${module.ModuleName}}?`,
      [{ text: "Cancel" }, { text: "Delete", onPress: handleDelete }]
    );
  //Views------------------------
  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: module.ModuleImageURL }}
        style={styles.Image}
      />
      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
        <Text style={styles.text}>Level {module.ModuleLevel}</Text>
        <Text style={styles.text}>
          {module.ModuleLeaderName}
          <Text style={styles.dimText}> (Module Leader) </Text>
        </Text>
      </View>
      <ButtonTray>
        <Button icon={<Icons.Edit />} label="Modify" onClick={onModify} />
        <Button
          icon={<Icons.Delete />}
          label="Delete"
          onClick={requestDelete}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 15,
  },

  image: {
    width: "100%",
    borderRadius: 3,
  },

  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 20,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dimText: {
    color: "grey",
  },
});

export default ModuleView;
