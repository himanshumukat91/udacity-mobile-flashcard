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

function* actionWatcher() {
    try{
        yield takeEvery('GET_DECKS', getDecksFromStorage);
    }catch(e){
        console.log(`Error in Saga ${e}`)
    }
}

export default function* rootSaga() {
   yield all([
    actionWatcher(),
   ]);
}