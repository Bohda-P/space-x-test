import { fork } from 'redux-saga/effects';
// Sagas
import { testSaga } from './testSaga/saga';

export default function* rootSaga() {
  yield fork(testSaga);
}
