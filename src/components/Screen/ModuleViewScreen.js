import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const  ModuleViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>View</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModuleViewScreen;
