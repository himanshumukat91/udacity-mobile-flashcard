import React from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

import { deleteDeck } from '../actions'
import ButtonText from './ButtonText'

class Deck extends React.Component {
    deleteDeck = () => {
        const { title, navigation, deleteDeck } = this.props;
        deleteDeck(title);
        navigation.navigate('Home');
    }

    render() {
        const { navigation, deckInfo, title } = this.props;
        
        return(
            <SafeAreaView style={styles.container}>
                {deckInfo
                ?(<View style={styles.container}>
                    <Text style={styles.title}>{deckInfo.title}</Text>
                    <Text style={styles.subtitle}>{`${deckInfo.questions.length} Cards`}</Text>  
                    <View style={styles.fullWidth}>
                    <ButtonText text='Add Card' 
                        onPress={() => navigation.navigate('AddCard', {title})} />
                    <ButtonText text='Start Quiz' 
                        onPress={() => navigation.navigate('Quiz', {title})} />
                    <ButtonText text='Delete Deck' 
                        onPress={this.deleteDeck} />
                    </View>
                </View>)
                :<Text>Deck not found</Text>}
            </SafeAreaView>
        )
    }
}

export default connect(
    (state, props) => {
        const { route } = props;
        const { title } = route.params;
        const deckInfo = state[title];
        return {
            deckInfo,
            title
        }
    },
    {
        deleteDeck
    },
)(Deck);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    title: {
        margin: 10,
        fontSize: 20,
    },
    subtitle: {
        margin: 10,
        marginBottom: 20,
        fontSize: 20,
        color: 'gray'
    },
    fullWidth: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
})