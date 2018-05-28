import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { slotAddAction, slotEditAction } from './action';
import { toggleLoader } from '../loader/reducer';

function* workerDeleteSlots(action) {
  const requestURL = 'http://localhost:8080/adslots/';
  try {
    const response = yield call(request, requestURL);
    yield put(insertSlot(response.data.adslots));
    yield put(toggleLoader());
  } catch (err) {
    //yield put(bookingsByPropertyFail(e)) // will do later
  }
}

export function* watcherDeleteSlots() {
  yield takeLatest(slotDeleteAction.getType(), workerDeleteSlots);
}