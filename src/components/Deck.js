import React from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Deck extends React.Component {
    render() {
        const { navigation, route, deckInfo, title } = this.props;
        
        return(
            <SafeAreaView style={styles.container}>
                {deckInfo
                ?(<View style={styles.container}>
                    <Text style={styles.title}>{deckInfo.title}</Text>
                    <Text style={styles.subtitle}>{`${deckInfo.questions.length} Cards`}</Text>  
                    <View style={styles.fullWidth}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => navigation.navigate('AddCard', {title})}>
                            <Text>Add Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
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
    button: {
        margin: 10,
        marginTop: 20,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        width: '50%',
        textAlign: 'center',
    }
})

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
    {},
)(Deck);