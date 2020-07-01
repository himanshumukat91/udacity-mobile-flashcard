import React from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Deck extends React.Component {
    render() {
        const { navigation, route, decks } = this.props;
        const { title } = route.params;
        const deckInfo = decks[title];
        
        return(
            <SafeAreaView style={styles.container}>
                {deckInfo
                ?(<View>
                    <Text>{deckInfo.title}</Text>
                    <Text>{`${deckInfo.questions.length} Cards`}</Text>  
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddCard', {title})}>
                            <Text>Add Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Quiz', {title})}>
                            <Text>Start Quiz</Text>
                        </TouchableOpacity>
                    </View>
                </View>)
                :<Text>Deck not found</Text>}
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