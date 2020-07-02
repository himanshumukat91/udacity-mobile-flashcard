import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native'

import { addCardToDeck } from '../actions'
import ButtonText from './ButtonText'

class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }

    onChangeQuestion = (value) => this.setState({question: value})
    onChangeAnswer = (value) => this.setState({answer: value})

    saveCard = () => {
        let { question, answer } = this.state;
        const { navigation, route } = this.props;
        const title = route.params.title;

        if(question && answer) {
            question += '?';
            this.props.addCardToDeck(title, {question, answer});
            navigation.navigate('Deck', {title});
        } else {
            alert('Please add question and answer text');
        }
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Question</Text>  
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={text => this.onChangeQuestion(text)}
                    value={this.state.question}
                    numberOfLines={2}
                    multiline={true}
                />
                <Text style={styles.title}>Answer</Text>  
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={text => this.onChangeAnswer(text)}
                    value={this.state.answer}
                    numberOfLines={4}
                    multiline={true}
                />
                <ButtonText text='Add Card' onPress={this.saveCard} />
            </SafeAreaView>
        )
    }
}

export default connect(
    () => ({}),
    { addCardToDeck },
)(AddCard);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        margin: 10,
        marginTop: 20,
        fontSize: 20,
        color: 'gray',
        height: 20,
    },
    inputContainer: {
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        minWidth: '80%',
    },
})