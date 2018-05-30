import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchSlotsReq, slotSaveReq, slotDetailReq, insertSlot, setSlot, saveFailed, slotDetailSuccess, slotDetailFailed } from './reducer';
import { toggleLoader } from '../loader/reducer';
import { getAPIRequestHeader } from 'utils/helper';

/* fetch list */
function* workerFetchSlots() {
  const requestURL = 'http://localhost:8080/adslots/';
  try {
    const response = yield call(request, requestURL);
    yield put(insertSlot(response.data.adslots));
    yield put(toggleLoader());
  } catch (err) {
    //yield put(bookingsByPropertyFail(e)) // will do later
  }
}

export function* watcherFetchSlots() {
  yield takeLatest(fetchSlotsReq.getType(), workerFetchSlots);
}

/* Fetch detail*/
function* workerFetchSlotDetail(action) {
  const requestURL = 'http://localhost:8080/adslots/'+action.payload;
  try {
    const response = yield call(request, requestURL);
    yield put(slotDetailSuccess(response.data.adslot));
    yield put(toggleLoader());
  } catch (err) {
    yield put(slotDetailFailed()) // will do later
  }
}

export function* watcherFetchSlotDetail() {
  yield takeLatest(slotDetailReq.getType(), workerFetchSlotDetail);
}

/* edit OR add*/
function* workerSaveSlot(action) {
  const payload = action.payload,
        requestURL = 'http://localhost:8080/adslots/' + (payload.id ? payload.id : ''),
        options = getAPIRequestHeader(payload);
  try {
    const response = yield call(request, requestURL, options);
    yield put(setSlot(response.data.adslot ? response.data.adslot : payload));
    yield put(toggleLoader());
  } catch (err) {
    yield put(saveFailed()) // will do later
  }
}

export function* watcherSaveSlot() {
  yield takeLatest(slotSaveReq.getType(), workerSaveSlot);
}