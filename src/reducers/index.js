import { GET_DECKS_SUCCESS, SAVE_DECK_SUCCESS, ADD_CARD_TO_DECK_SUCCESS } from '../actions'

export default function decks(state={}, action){
    switch (action.type) {
        case GET_DECKS_SUCCESS:
            return {
                ...action.decks
            }
        case SAVE_DECK_SUCCESS:
            return {
                ...state,
                ...action.deck   
            }
        
        case ADD_CARD_TO_DECK_SUCCESS:
            const { title, card } = action
            return {
              ...state,
              [title]: {
                ...state[title],
                questions: [ ...state[title].questions ].concat(card)
              }
            }
        default:
            return state
    }
}