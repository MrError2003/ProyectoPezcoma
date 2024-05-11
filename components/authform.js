import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, ImageBackground } from 'react-native';

function AuthForm({ navigation }) {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <ImageBackground source={require('../assets/landing_bg3.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>{showRegistration ? 'Regístrese' : 'Iniciar sesión'}</Text>

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
            <Button title={showRegistration ? 'Registrarse' : 'Iniciar sesión'} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Prueba" onPress={() => navigation.navigate('Prueba')} />
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
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
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
    marginHorizontal: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default AuthForm;