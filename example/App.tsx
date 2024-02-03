import { StyleSheet, Text, View } from 'react-native';

import * as ExpoNativeView from 'expo-native-view';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoNativeView.hello()}</Text>
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
