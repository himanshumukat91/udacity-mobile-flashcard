import { AsyncStorage } from 'react-native'

export const AYSNC_KEY = 'key:flashcards'

let initDecks = {
    'React': {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'React is a javascript library written by the developers at Facebook to build cleaner reusable components'
            },
            {
                question: 'What is state in React?',
                answer: 'State is an object that determines the behavior of a component'
            },
        ]
    },
    'Data Structures': {
        title: 'Data Structures',
        questions: [
            {
                question: 'What is an array in C?',
                answer: 'An array is a sequence of elements of similar datatype'
            },
            {
                question: 'What is a string?',
                answer: 'An string is a sequence of characters'
            }
        ]
    }
}

const setInitData = () => {
    AsyncStorage.setItem(AYSNC_KEY, JSON.stringify(initDecks));
    return initDecks;
}

export const getDecks = () => {
    return AsyncStorage.getItem(AYSNC_KEY)
    .then(data => (
        data?JSON.parse(data):setInitData()
    ));
}

export const getDeck = (id) => {
    return AsyncStorage.getItem(AYSNC_KEY)
    .then(data => {
        const decks = JSON.parse(data);
        return decks[id];
    });
}

export const saveDeck = (deck) => {
    AsyncStorage.mergeItem(AYSNC_KEY, JSON.stringify(deck))
    .then(data => {
        console.log(`updated data - ${data}`);
    });
}

export const addCardToDeck = (title, card) => {
  AsyncStorage.getItem(AYSNC_KEY)
    .then(JSON.parse)
    .then(decks => {
      const newDeck = {
        ...decks,
        [title]: {
          ...decks[title],
          questions: [ ...decks[title].questions ].concat(card)
        }
      }
      return AsyncStorage.setItem(AYSNC_KEY, JSON.stringify(newDeck))
        .then(() => ({ title, card }))
    })
}

export const deleteDeck = (id) => {
    return AsyncStorage.getItem(AYSNC_KEY)
    .then(data => {
        let decks = JSON.parse(data);
        delete decks[id];
        AsyncStorage.setItem(AYSNC_KEY, JSON.stringify(decks))
        return decks;
    });
}