import { call, put, takeEvery, all } from 'redux-saga/effects';
import { getDecks, saveDeck, addCardToDeck } from '../utils/api';

function* getDecksFromStorage() {
    try{
        const result = yield call(getDecks, null);  
        yield put({ type: "GET_DECKS_SUCCESS", decks: result });
    } catch(e) {
        console.log(e);
    }
}

function* saveDeckToStorage(action) {
    try{
        const { deck } = action;
        yield call(saveDeck, deck);  
        yield put({ type: "SAVE_DECK_SUCCESS", deck });
    } catch(e) {
        console.log(e);
    }
}

function* saveCardToStorage(action) {
    try{
        const { title, card } = action;
        yield call(addCardToDeck, title, card);  
        yield put({ type: "ADD_CARD_TO_DECK_SUCCESS", cardDetails: {title, card}});
    } catch(e) {
        console.log(e);
    }
}

function* actionWatcher() {
    try{
        yield takeEvery('GET_DECKS', getDecksFromStorage);
        yield takeEvery('SAVE_DECK', saveDeckToStorage);
        yield takeEvery('ADD_CARD_TO_DECK', saveCardToStorage);
    }catch(e){
        console.log(`Error in Saga ${e}`)
    }
}

export default function* rootSaga() {
   yield all([
    actionWatcher(),
   ]);
}