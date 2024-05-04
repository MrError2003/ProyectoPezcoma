import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            <Text>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    }
});

export default Card;
