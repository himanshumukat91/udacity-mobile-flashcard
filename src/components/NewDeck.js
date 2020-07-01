import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, TextInput } from 'react-native'

import { saveDeck } from '../actions'; 
import { forInStatement } from '@babel/types';

class NewDeck extends React.Component {
    state = {
        deckName: ''
    }

    onChangeText = (value) => this.setState({deckName: value})
    
    saveDeck = () => {
        const { deckName } = this.state;
        const { navigation } = this.props;
        if(deckName) {
            const deck = {
                [deckName]: {
                    title: deckName,
                    questions: []
                } 
            }
            this.props.saveDeck(deck);
            this.setState({deckName: ''});
            navigation.navigate('Deck', {title: this.state.deckName});
        } else {
            alert('Please give a title to your deck');
        }
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>
                    Please Enter Deck Title
                </Text>    
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={text => this.onChangeText(text)}
                    value={this.state.deckName}
                />
                <TouchableOpacity style={styles.button}
                    onPress={this.saveDeck}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        margin: 10,
        marginBottom: 20,
        fontSize: 20,
    },
    inputContainer: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        minWidth: '80%',
    },
    button: {
        margin: 10,
        marginTop: 20,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        minWidth: '50%',
        textAlign: 'center',
    }
})

export default connect(
    () => ({}),
    { saveDeck },
)(NewDeck);