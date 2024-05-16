import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Prueba = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Prueba</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
    padding: 10,
    paddingTop: 20,
},
});

export default Prueba;