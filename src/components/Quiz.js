import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

class NewDeck extends React.Component {
    state = {
        currentQuestion: 1,
        correctAnswers: 0,
        displayingAnswer: false,
    }

    submitAnswer = (correct) => {
        let {correctAnswers, currentQuestion} = this.state;
        if(correct) {
            correctAnswers += 1;
        }
        currentQuestion += 1;
        this.setState({correctAnswers, currentQuestion, displayingAnswer: false})
    }

    render() {
        const {currentQuestion, displayingAnswer, correctAnswers} = this.state;
        const { navigation, questions, total, title } = this.props;
        const questionInfo = questions[currentQuestion - 1];

        return(
            <SafeAreaView style={styles.container}>
                {
                    currentQuestion <= total
                    ?<View>
                        <Text>{currentQuestion} / {total}</Text>
                        <Text>{displayingAnswer?questionInfo.answer:questionInfo.question}</Text>
                        <TouchableOpacity onPress={() => this.setState({displayingAnswer:!this.state.displayingAnswer})}>
                            <Text>Show {displayingAnswer?'Question':'Answer'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.submitAnswer(true)}>
                            <Text>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.submitAnswer(false)}>
                            <Text>Wrong</Text>
                        </TouchableOpacity>
                    </View>
                    :<View>
                        <Text>Congratulation! Quiz completed</Text>
                        <Text>Correct: {correctAnswers}</Text>
                        <Text>Total  : {total}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Deck', {title})}>
                            <Text>Go to {title}</Text>
                        </TouchableOpacity>
                    </View>
                }
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
    (state, props) => {
        const { title } = props.route.params;
        const deckInfo = state[title];
        const questions = deckInfo.questions;

        return {
            questions: questions,
            total: (questions || []).length,
            title
        }
    },
    {},
)(NewDeck);