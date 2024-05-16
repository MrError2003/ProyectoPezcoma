import React from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, ImageBackground, FlatList } from 'react-native';

const Prueba = () => {
  const data = [
    { key: '1', text: 'Un entorno de pesca realista con gráficos impresionantes' },
    { key: '2', text: 'Diversas especies de peces para capturar' },
    { key: '3', text: 'Controles intuitivos y fáciles de aprender' },
    { key: '4', text: 'Diferentes niveles de dificultad para poner a prueba tus habilidades' },
    { key: '5', text: 'La oportunidad de familiarizarte con la mecánica del juego' },
  ];

  return (
    <ImageBackground source={require('../assets/pescando.png')} style={styles.backgroundImage}>
      <Text style={styles.tittle}>¡Bienvenido a la página de prueba de pesca!</Text>
      <Text style={styles.text}>Embárcate en una aventura de pesca virtual y experimenta la emoción de lanzar tu caña, sentir el tirón de un pez y luchar para sacarlo del agua. En esta página de prueba, podrás practicar tus habilidades de pesca y familiarizarte con los controles del juego antes de sumergirte en la experiencia completa.</Text>
      <Text style={styles.tittle}>¿Qué puedes esperar en esta página de prueba?</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.listItemText}>{item.text}</Text>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle: {
    fontSize: 20,
    color: 'black',
    padding: 20,
    paddingTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    padding: 20,
    paddingTop: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  listItemText: {
    fontSize: 16,
    color: 'black',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default Prueba;
