import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchSlotsReq, slotSaveReq, slotDetailReq, insertSlot, setSlot, slotDetailSuccess } from './reducer';
import { showLoader, hideLoader } from '../loader/reducer';
import { setNotice, removeNotice } from '../notice/reducer';
import { hideSlotForm } from '../adslots/reducer';
import { getAPIRequestHeader } from 'utils/helper';


function* doPreStuff() {
    yield put(removeNotice());
    yield put(showLoader());
}

function* doPostStuff() {
    yield put(hideLoader());
}

function* doErrorStuff(err) {
    yield put(hideLoader());
    yield put(setNotice({
        message: err.message,
        type: 'error'
    }));
}

/* fetch list */
function* workerFetchSlots() {
  const requestURL = 'http://localhost:8080/adslots/';
  try {
    const response = yield call(request, requestURL);
    yield call(doPreStuff);
    yield put(insertSlot(response.data.adslots));
    yield call(doPostStuff);
  } catch (err) {
    yield call(doErrorStuff,err);
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
    yield call(doPreStuff);
    yield put(slotDetailSuccess(response.data.adslot));
    yield call(doPostStuff);
  } catch (err) {
    yield call(doErrorStuff,err);
  }
}

export function* watcherFetchSlotDetail() {
  yield takeLatest(slotDetailReq.getType(), workerFetchSlotDetail);
}

/* edit OR add*/
function* workerSaveSlot(action) {
  const payload = action.payload.data,
        id = action.payload.id,
        requestURL = 'http://localhost:8080/adslots/' + (id ? id : ''),
        options = getAPIRequestHeader(payload, id);
  try {
    const response = yield call(request, requestURL, options);
    yield call(doPreStuff);
    yield put(setSlot(response.data.adslot ? response.data.adslot : payload));
    yield call(doPostStuff);
    yield put(setNotice({
        message: 'Adslot has been saved successfully.',
        type: 'notice'
    }));
    yield put(hideSlotForm());
  } catch (err) {
    yield call(doErrorStuff,err);
  }
}

export function* watcherSaveSlot() {
  yield takeLatest(slotSaveReq.getType(), workerSaveSlot);
}