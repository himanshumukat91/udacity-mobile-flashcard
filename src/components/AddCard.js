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
                <Text>
                    Add New Card to {title}
                </Text>  
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={text => this.onChangeQuestion(text)}
                    value={this.state.question}
                />
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={text => this.onChangeAnswer(text)}
                    value={this.state.answer}
                />
                <TouchableOpacity
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
    inputContainer: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    }
})

export default connect(
    () => ({}),
    { addCardToDeck },
)(AddCard);