import { call, put, takeEvery } from 'redux-saga/effects'
import {
  addIngredient,
  getIngredients,
  getIngredientsSuccess
} from '../store/ingredientsSlice'
import { get, post } from '../requests/Request'
import type { Ingredient } from '../types/ingredients/Ingredient'
import { fetchPipeline } from './fetchPipeline.saga'

type AddIngredient = ReturnType<typeof addIngredient>

function* getIngredientsSaga() {
  try {
    const result: Ingredient[] = yield call(get<Ingredient[]>, '/ingredients')
    yield* fetchPipeline<Ingredient[]>({
    selectStatus: state => state.ingredients.status,
    requestAction: getIngredients,
    successAction: getIngredientsSuccess,
    // failureAction: getIngredientsFailure,
    apiCall: () => get<Ingredient[]>('/ingredients')
  })
    yield put(getIngredientsSuccess(result))
  } catch (error) {
    console.warn(error)
  }
}

function* addIngredientSaga(action?: AddIngredient) {
  if (!action) return
  try {
    console.log(action.payload)
    post('/ingredients', action.payload)
  } catch (error) {
    console.warn(error)
  }
}

export function* watchGetIngredientsSaga() {
  yield takeEvery(getIngredients.type, getIngredientsSaga)
}

export function* watchAddIngredientSaga() {
  yield takeEvery(addIngredient.type, addIngredientSaga)
}
