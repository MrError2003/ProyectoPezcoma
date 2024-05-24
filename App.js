import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthForm from './components/authform';
import Prueba from './screens/prueba';
import Postcards from './screens/postcards';
import tutorialScreen from './screens/tutoriales';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="AuthForm"
          component={AuthForm}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Prueba"
          component={Prueba}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Postcards"
          component={Postcards}
          options={{ headerShown: false }} />

          
        <Stack.Screen 
          name="tutoriales" 
          component={tutorialScreen}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;