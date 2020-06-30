import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

export default class NewDeck extends React.Component {
    render() {
        const { route } = this.props;
        const title = route.params.title;
        return(
            <SafeAreaView style={styles.container}>
                <Text>
                    Add New Card to {title}
                </Text>
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