import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Switch } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation


const AuthForm = () => {

    const navigation = useNavigation(); // Inicializar useNavigation
    const [showRegistration, setShowRegistration] = useState(false);

    return (

        <View style={styles.card}>
            <Text style={styles.text}>{showRegistration ? "Regístrese" : "Iniciar sesión"}</Text>

            {!showRegistration && (
                <TextInput style={styles.input} placeholder="Correo electrónico" />
            )}

            <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />

            {showRegistration && (
                <>
                    <TextInput style={styles.input} placeholder="Nombre" />
                    <TextInput style={styles.input} placeholder="Apellido" />
                    <TextInput style={styles.input} placeholder="Edad" />
                </>
            )}

            <View style={styles.buttonContainer}>
                <Button title={showRegistration ? "Registrarse" : "Iniciar sesión"} />

                <Button title="Prueba" onPress={() => navigation.navigate('Prueba')}/>
            </View>

            <View style={styles.switchContainer}>
                <Text>Iniciar sesión</Text>
                <Switch
                    value={showRegistration}
                    onValueChange={(value) => setShowRegistration(value)}
                />
                <Text>Registro</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 320,
        height: 420,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        shadowOpacity: 100,
        shadowRadius: 50,
        elevation: 12,
        borderWidth: 5, // To create inset effect
        borderColor: 'rgba(0, 0, 0, 0.2)', // To create inset effect
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    text: {
        fontSize: 20,
        color: 'black',
        padding: 10,
        paddingTop: 20,
    },
    input: {
        width: 260,
        height: 40,
        margin: 6,
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
    },
    buttonContainer: {
        marginTop: 20,
        margin: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
});

export default AuthForm;
