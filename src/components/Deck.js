import React from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Deck extends React.Component {
    render() {
        const { navigation, route, decks } = this.props;
        const deckTitle = route.params.title;
        const deckInfo = decks[deckTitle];
        
        return(
            <SafeAreaView style={styles.container}>
                <Text>{deckInfo.title}</Text>
                <Text>{`${deckInfo.questions.length} Cards`}</Text>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddCard', {title: deckInfo.title})}>
                        <Text>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Quiz', {quiz: deckInfo.questions})}>
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
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

export default connect(
    (state) => ({
        decks: state
    }),
    {},
)(Deck);