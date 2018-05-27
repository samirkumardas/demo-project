import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchSlots, insertSlot } from './reducer';

function* workerFetchSlots(action) {
  const requestURL = 'http://localhost:8080/adslots/';
  try {
    const response = yield call(request, requestURL);
    yield put(insertSlot(response.data.adslots));
  } catch (err) {
    //yield put(bookingsByPropertyFail(e)) // will do later
  }
}

export function* watcherFetchSlots() {
  yield takeLatest(fetchSlots.getType(), workerFetchSlots);
}