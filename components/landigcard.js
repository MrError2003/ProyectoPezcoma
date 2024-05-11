import React from "react";
import { View, StyleSheet, Text, TextInput, Button, Linking } from "react-native";

const LandingCard = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>Registrese</Text>
            
            <TextInput style={styles.input} placeholder="Nombre" />
            <TextInput style={styles.input} placeholder="Apellido" />
            <TextInput style={styles.input} placeholder="Edad" />
            <TextInput style={styles.input} placeholder="Correo electronico" />


            <View style={styles.buttonContainer}>
                <Button style={styles.button} title="Registrarse"/>
                
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 320,
        height: 360,
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
        marginTop: 20, // Agregar margen superior al contenedor del botón
    },
});

export default LandingCard;
