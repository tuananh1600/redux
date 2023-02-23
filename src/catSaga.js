import axios from "axios"
import { put, takeEvery,call} from "redux-saga/effects"
import { catSlice } from "./catSlice"
let a=10
let check = 1
function* workGetCatsFetch(){
    check =1
    const cats = yield call(()=> axios('https://jsonplaceholder.typicode.com/posts'))
    const formatCats = yield cats.data.slice(0,a)
    yield put(catSlice.actions.getCatsSuccess(formatCats))   
}
function* workGetseeMoreFetch(){
    check++
    const cats = yield call(()=> axios('https://jsonplaceholder.typicode.com/posts'))
    const formatCats = yield cats.data.slice(0,a*check)
    yield put(catSlice.actions.seeMoreSuccess(formatCats))   
}

function* catSaga() {
    yield takeEvery("cats/getCatsFetch",workGetCatsFetch)
    yield takeEvery("cats/seeMoreFetch",workGetseeMoreFetch)
}         
export default catSaga