import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

export default class NewDeck extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Text>
                    Start Quiz
                </Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})