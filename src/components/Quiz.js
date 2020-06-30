import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

export default class NewDeck extends React.Component {
    render() {
        const { route } = this.props;
        const quiz = route.params.quiz;
        return(
            <SafeAreaView style={styles.container}>
                <Text>Start Quiz</Text>
                <Text>{JSON.stringify(quiz)}</Text>
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