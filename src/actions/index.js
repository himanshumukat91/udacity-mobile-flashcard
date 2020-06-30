export const GET_DECKS = 'GET_DECKS';
export const GET_DECK = 'GET_DECK';
export const SAVE_DECK = 'SAVE_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS';
export const SAVE_DECK_SUCCESS = 'SAVE_DECK_SUCCESS';
export const ADD_CARD_TO_DECK_SUCCESS = 'ADD_CARD_TO_DECK_SUCCESS';

export const getDecks = () => ({
    type: GET_DECKS,
});

export const getDeck = (id) => ({
    type: GET_DECK,
    id
});

export const saveDeck = (deck) => ({
    type: SAVE_DECK,
    deck
});

export const saveCardToDeck = (title, card) => ({
    type: ADD_CARD_TO_DECK,
    title,
    card
});