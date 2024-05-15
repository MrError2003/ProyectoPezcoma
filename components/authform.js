import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, Switch, StyleSheet, ImageBackground, Alert } from 'react-native';

function AuthForm({ navigation }) {
  const [showRegistration, setShowRegistration] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://integrador4to.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      // Verifica que el token JWT esté presente en la respuesta del backend
      if (data && data.token) {
        // Guarda el token JWT en AsyncStorage
        await AsyncStorage.setItem('token', data.token);
        // Redirige a la pantalla 'Prueba' (o la que necesites)
        navigation.navigate('Postcards');
      } else {
        throw new Error('Token no encontrado en la respuesta del servidor');
      }

    } catch (error) {
      Alert.alert('Error', error.message);
      console.error(error);
    }
  };

  return (
    <ImageBackground source={require('../assets/landing_bg3.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={[styles.card, { height: showRegistration ? 540 : 360 }]}>
          <Text style={styles.text}>{showRegistration ? 'Regístrese' : 'Iniciar sesión'}</Text>

          {!showRegistration && (
            <>
              <TextInput style={styles.input} placeholder="Correo electrónico" onChangeText={setEmail}
                value={email} />

              <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry onChangeText={setPassword}
                value={password} />
            </>
          )}



          {!showRegistration && (
            <View style={styles.buttonContainer}>
              <Button title='Iniciar sesion' onPress={handleLogin} />
            </View>
          )}


          {showRegistration && (
            <>
              <TextInput style={styles.input} placeholder="Nombre Completo" />
              <TextInput style={styles.input} placeholder="Fecha de nacimiento" />
              <TextInput style={styles.input} placeholder="Correo electronico" />
              <TextInput style={styles.input} placeholder="Contraseña" />
              <TextInput style={styles.input} placeholder="Confirmar contraeña" />

              <View style={styles.buttonContainer}>
                <Button title='Registrarse' />
              </View>

            </>
          )}

          {/* <View style={styles.buttonContainer}>
            <Button title="Prueba" onPress={() => navigation.navigate('Prueba')} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Prueba" onPress={() => navigation.navigate('Postcards')} />
          </View> */}

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
    paddingTop: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default AuthForm;