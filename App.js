import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/card';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Card style={styles.container2}>
        <Text>Card 1</Text>
      </Card>

      <Card>
        <Text>Card 2</Text>
      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    padding: 20,
    margin: 10,
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  }

});

