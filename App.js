import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import AuthForm from './components/authform';
import { NavigationContainer } from '@react-navigation/native';
import Prueba from './screens/prueba'; // Importa tu pantalla Prueba

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <View style={styles.container}>
      <NavigationContainer>
        <ImageBackground source={require('./assets/landing_bg3.png')} style={styles.backgroundImage} />
        <StatusBar style="auto" />

        <View style={styles.overlay}>
          <Stack.Navigator>
            <Stack.Screen name="AuthForm" component={AuthForm} />
            <Stack.Screen name="Prueba" component={Prueba} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  overlay: {
    zIndex: 1,
  }

});

