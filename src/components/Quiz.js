import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Animated, Easing } from 'react-native'

import ButtonText from './ButtonText'

class NewDeck extends React.Component {
    constructor(){
        super();
        this.opacity = new Animated.Value(1)
        this.state = {
            currentQuestion: 1,
            correctAnswers: 0,
            displayingAnswer: false,
        }
    }

    animatedBox = (value = 1000) => {
        Animated.sequence([
        Animated.timing(this.opacity, {
                toValue: 0.1,
                duration: 1
            }),
            Animated.timing(this.opacity, {
                toValue: 1,
                duration: value
            })
        ]).start()
    }

    submitAnswer = (correct) => {
        this.animatedBox(500)
        let {correctAnswers, currentQuestion} = this.state;
        if(correct) {
            correctAnswers += 1;
        }
        currentQuestion += 1;
        this.setState({correctAnswers, currentQuestion, displayingAnswer: false})
    }

    toggleQuestion = () => {
        //Switch back to question quickly but show animation when swicthing to answer
        this.animatedBox(this.state.displayingAnswer?100:1500);
        this.setState(() => ({displayingAnswer:!this.state.displayingAnswer}))
    }

    getResultCard = ({correctAnswers, total, title}) => {
        const {navigation} = this.props;

        return(
            <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>CONGRATULATIONS!</Text>
                <Text style={styles.resultSubTitle}>{`Correct : ${correctAnswers}`}</Text>
                <Text style={styles.resultSubTitle}>{`Total : ${total}`}</Text>
                <ButtonText text={`Back to ${title}`} 
                    onPress={() => navigation.navigate('Deck', {title})}/>
            </View>
        )
    }

    render() {
        const {currentQuestion, displayingAnswer, correctAnswers} = this.state;
        const { questions, total, title } = this.props;
        const questionInfo = questions[currentQuestion - 1];
        const animatedStyle = { opacity: this.opacity }

        return(
            <SafeAreaView style={styles.container}>
                {currentQuestion <= total
                    ?<View style={styles.cardContainer}>
                        <Text style={styles.counter}>{currentQuestion} / {total}</Text>
                        <View style={styles.centerContainer}>
                            <Animated.Text style={[styles.card, animatedStyle]}>
                                {displayingAnswer?questionInfo.answer:questionInfo.question}
                            </Animated.Text>
                            <TouchableOpacity onPress={this.toggleQuestion}>
                                <Text style={styles.link}>
                                    Show {displayingAnswer?'Question':'Answer'}
                                </Text>
                            </TouchableOpacity>
                            <ButtonText text='Correct' style={{backgroundColor:'green'}}
                                onPress={() => this.submitAnswer(true)} />
                            <ButtonText text='Wrong' style={{backgroundColor:'red'}}
                                onPress={() => this.submitAnswer(false)} />
                        </View>
                    </View>
                    :<View style={styles.container}>
                        {this.getResultCard({correctAnswers, total, title})}
                    </View>
                }
            </SafeAreaView>
        )
    }
}

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    counter: {
        margin: 10,
        fontWeight: "bold",
    },
    cardContainer: {
        flex: 1,
        width: '100%',
    },
    centerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
    },
    card: {
        backgroundColor: 'lightblue',
        width: '80%',
        padding: 10,
        borderRadius: 5,
        marginTop: 50,
        marginBottom: 20,
        height: '50%',
    },
    link: {
        color: 'gray'
    },
    resultContainer: {
        width: '80%',
        height: '50%',
        backgroundColor: 'lightsteelblue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultTitle: {
        color: 'green',
        fontSize: 20,
        marginBottom: 20,
    },
    resultSubTitle: {
        fontSize: 15
    },
})