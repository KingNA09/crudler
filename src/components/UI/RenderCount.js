import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const RenderCount = ({
  backgroundColor = "dodgerblue",
  fontColor = "white",
}) => {
  // Initialisations---------------------------
  const countRef = useRef(0);
  countRef.current += 1;
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default RenderCount;
