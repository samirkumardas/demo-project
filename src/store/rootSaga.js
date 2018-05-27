
import { fork, all } from 'redux-saga/effects';
import * as adslotSaga from '../components/adslots/sagas';

const sagas = {
  ...adslotSaga
}

const forkedSagas = Object.keys(sagas).map(key => fork(sagas[key])); // check fork is needed or not

export default function* rootSaga() {
  yield all(forkedSagas);
}
