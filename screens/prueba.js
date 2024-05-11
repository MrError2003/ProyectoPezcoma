import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Prueba = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Prueba</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Prueba;