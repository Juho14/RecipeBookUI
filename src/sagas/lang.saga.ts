import { takeEvery } from 'redux-saga/effects'
import { setLang } from '../store/langSlice'
import i18n from '../locales/translator'

type SetLangAction = ReturnType<typeof setLang>

function* changeLanguage(action?: SetLangAction) {
  if (!action) return
  try {
    yield i18n.changeLanguage(action.payload)
  } catch (error) {
    console.warn(error)
  }
}

export function* watchChangeLanguageSaga() {
  yield takeEvery(setLang.type, changeLanguage)
}
