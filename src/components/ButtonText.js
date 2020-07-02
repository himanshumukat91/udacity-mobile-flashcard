import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function ButtonText({text, onPress, style}) {
    return (
        <TouchableOpacity style={[styles.button, style?style:{}]}
            onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        marginTop: 20,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        minWidth: '50%',
    },
    buttonText: {
      alignSelf: "center",
      textTransform: "uppercase"
    }
})
