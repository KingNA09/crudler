import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const RenderCount = ({
  backgroundColor = "dodgerblue",
  fontColor = "white",
}) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <View style={[styles.count, { backgroundColor }]}>
      <Text style={{ color: fontColor }}>
        Render Count: {renderCountRef.current}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  count: {
    padding: 5,
  },
});

export default RenderCount;
