import { call, put, all } from 'redux-saga/effects';


function* actionWatcher() {
    try{
        // yield takeLatest('GET_DECKS', getDecks);
    }catch(e){
        console.log(`Error in Saga ${e}`)
    }
}

export default function* rootSaga() {
   yield all([
    actionWatcher(),
   ]);
}