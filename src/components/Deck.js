import React from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, View, Text, StyleSheet, Animated } from 'react-native'

import { deleteDeck } from '../actions'
import ButtonText from './ButtonText'

class Deck extends React.Component {
    constructor() {
        super()
        this.opacity = new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(this.opacity, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
        }).start();
    }

    deleteDeck = () => {
        const { title, navigation, deleteDeck } = this.props;
        deleteDeck(title);
        navigation.navigate('Home');
    }

    startQuiz = (numOfQuestions) => {
        const { navigation, title } = this.props;

        //Start quiz only if there is atleast one card
        if(numOfQuestions)
            navigation.navigate('Quiz', {title})
    }

    render() {
        const { navigation, deckInfo, title } = this.props;
        const numOfQuestions = deckInfo?deckInfo.questions.length:0;
        const animatedStyle = { opacity: this.opacity }

        return(
            <SafeAreaView style={styles.container}>
                {deckInfo
                ?(<Animated.View style={[styles.container, animatedStyle]}>
                    <Text style={styles.title}>{deckInfo.title}</Text>
                    <Text style={styles.subtitle}>{`${numOfQuestions} Cards`}</Text>  
                    <View style={styles.fullWidth}>
                    <ButtonText text='Add Card' 
                        onPress={() => navigation.navigate('AddCard', {title})} />
                    <ButtonText text='Start Quiz' style={numOfQuestions?{}:styles.disabled}
                        onPress={() => this.startQuiz(numOfQuestions)} />
                    <ButtonText text='Delete Deck' 
                        onPress={this.deleteDeck} />
                    </View>
                </Animated.View>)
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
    disabled: {
        backgroundColor: 'lightgray'
    }
})