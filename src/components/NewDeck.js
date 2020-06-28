import React from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class NewDeck extends React.Component {
    render() {
        const { navigation } = this.props;
        return(
            <SafeAreaView style={styles.container}>
                <Text>
                    New Deck
                </Text>
                <TouchableOpacity
                        onPress={() => navigation.navigate('Deck')}>
                        <Text>Create</Text>
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
    }
})