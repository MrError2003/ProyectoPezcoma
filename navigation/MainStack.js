import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Prueba } from "../screens/prueba";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Prueba"
                    component={Prueba}
                />

            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default MainStack;