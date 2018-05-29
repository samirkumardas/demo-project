import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { slotDetailAction, slotAddAction, slotEditAction } from './reducer';
import { toggleLoader } from '../loader/reducer';

function* workerFetchSlotDetail(action) {
  const requestURL = 'http://localhost:8080/adslots/'+action;
  try {
    const response = yield call(request, requestURL);
    yield put(insertSlot(response.data.adslots));
    yield put(toggleLoader());
  } catch (err) {
    //yield put(bookingsByPropertyFail(e)) // will do later
  }
}

export function* watcherFetchSlotDetail() {
  yield takeLatest(slotDetailAction.getType(), workerFetchSlotDetail);
}