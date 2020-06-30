import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { getDecks } from '../actions'


const Deck = ({deck, navigation}) => {
    return (
        <View style={styles.deckCard}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Deck', {title: deck.title})}>
                    <Text style={styles.title}>{deck.title}</Text> 
                     <Text style={styles.subTitle}>{`${deck.questions.length} Cards`}</Text>
            </TouchableOpacity>
        </View>
    );
  }

class DeckList extends React.Component {
    componentDidMount() {
        this.props.getDecks()
    }

    render() {
        const { navigation } = this.props;
        return(
            <SafeAreaView style={styles.container}>
                    <FlatList
                        data={Object.values(this.props.decks)}
                        renderItem={({ item }) => <Deck deck={item} navigation={navigation} />}
                        keyExtractor={decks => decks.title}
                    />
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
    deckCard: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 30,
    },
    subTitle: {
        fontSize: 20
    }
})

export default connect(
    (state) => ({
        decks: state
    }),
    {
        getDecks
    },
)(DeckList);