import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as constants from './constants'

function* helloSaga()
{
    console.log('hello saga.')
}

export function* incrementAsync()
{
    yield call(delay, 1000)
    yield put({type: constants.INCREMENT})
}

export function* watchIncrementAsync()
{
    yield takeEvery(constants.INCREMENT_ASYNC, incrementAsync)
}

