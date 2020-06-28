import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Deck extends React.Component {
    render() {
        const { navigation } = this.props;
        return(
            <SafeAreaView style={styles.container}>
                <Text>
                    Deck Details
                </Text>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddCard')}>
                        <Text>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Quiz')}>
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
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