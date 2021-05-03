// import { delay } from "redux-saga";
import { takeLatest, put, delay, call } from "redux-saga/effects";

//########################
function* asyncageup() {
    yield delay(4000);
    yield put({ type: 'AGE_UP_ASYNC', value: 5 });
}
export function* watchAgeup() {
    yield takeLatest('AGE_UP', asyncageup);
}
//########################  

//########################
function* asyncagedown() {
    yield delay(4000);
    yield put({type: 'AGE_DOWN_ASYNC', value: 15});
}


export function* watchAgedown() {
    yield takeLatest('AGE_DOWN', asyncagedown);
}
//########################

//########################
function* changedogimageasync() {    
    try {
      //yield put(requestDog());
      const data = yield call(() => {
        return fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
        }
      );
      yield put({ type: 'CHANGE_DOGIMG_ASYNC', value: data.message });
    } catch (error) {
        yield put({ type: 'CHANGE_DOGIMG_ASYNC', value: 'error' });
    }
}

export function* changeDogimage() {
    yield takeLatest('CHANGE_DOGIMG', changedogimageasync);
}
//########################
