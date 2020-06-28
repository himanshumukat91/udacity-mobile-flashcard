import React from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class DeckList extends React.Component {
    render() {
        const { navigation } = this.props;
        return(
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Deck')}>
                    <Text>Deck List</Text>
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