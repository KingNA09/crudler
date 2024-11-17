import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const RenderCount = ({
  backgroundColor = "dodgerblue",
  fontColor = "white",
}) => {
  // Initialisations---------------------------
  const countRef = useRef(0);
  countRef.current += 1;

  // Views------------------------
  /*
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: fontColor }]}>
        Number of renders: {countRef.current}
      </Text>
    </View>
  );
  */
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 5,
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RenderCount;
