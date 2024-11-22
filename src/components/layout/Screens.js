import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";

const Screen = ({ children }) => {
  return (
    <View style={styles.screen}>
      {children}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Screen;
