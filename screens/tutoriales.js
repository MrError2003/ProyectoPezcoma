import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Video } from "react-native";
import { useNavigation } from '@react-navigation/NativeAppEventEmitter';
//se crea este screen para agregar videotutoriales de preparaciones o recetas con pescado

const tutorialScreen = ({ route }) => {
    const navigation = useNavigation(); //para obtener la referencia de navegacion

    const [videoUri, setVideoUri] = useState(''); // para almacenar uri del video

    useEffect(() => {
        const { videoSource } = route.params; //para acceder al video
        setVideoUri(videoSource);// para actualizar la uri del video
    }, [route.params]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Text style={styles.closeText}>Cerrar</Text>
            </TouchableOpacity>
            <Video
                source={{ uri: videoUri }} // Cargar video desde la URI
                style={styles.video}
                controls={true} // Habilitar controles de video
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
    },
    closeText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    video: {
        width: 300,
        height: 200, // ajustar las dimensiones del video según sea necesario
    },
});

export default tutorialScreen;