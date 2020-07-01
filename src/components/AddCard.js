import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native'

import { addCardToDeck } from '../actions'; 

class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }

    onChangeQuestion = (value) => this.setState({question: value})
    onChangeAnswer = (value) => this.setState({answer: value})

    saveCard = () => {
        const { question, answer } = this.state;
        const { navigation, route } = this.props;
        const title = route.params.title;

        if(question && answer) {
            this.props.addCardToDeck(title, {question, answer});
            navigation.navigate('Deck', {title});
        } else {
            alert('Please add question and answer both!');
        }
    }

    render() {
        const { route } = this.props;
        const title = route.params.title;
        return(
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Question</Text>  
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={text => this.onChangeQuestion(text)}
                    value={this.state.question}
                />
                <Text style={styles.title}>Answer</Text>  
                <TextInput
                    style={[styles.inputContainer, styles.inputAnswerContainer]}
                    onChangeText={text => this.onChangeAnswer(text)}
                    value={this.state.answer}
                />
                <TouchableOpacity style={styles.button}
                    onPress={this.saveCard}>
                    <Text>Add Card</Text>
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
        marginTop: 20,
        fontSize: 20,
        color: 'gray'
    },
    inputContainer: {
        height: 80, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        minWidth: '80%',
    },
    inputAnswerContainer: {
        height: 120,
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
    { addCardToDeck },
)(AddCard);