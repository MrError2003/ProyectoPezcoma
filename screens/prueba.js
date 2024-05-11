import Card from '../components/card';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';


export default function Prueba() {

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Prueba de cambio de pantalla"
                    component={Card}
                    options={{ title: 'Prueba' }}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const Stack = createNativeStackNavigator();

