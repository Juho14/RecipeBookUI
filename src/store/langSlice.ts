import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { LANG, type Lang } from '../types/ui/Lang'
import i18n from '../locales/translator'

interface LangState {
  current: Lang
}

const initialState: LangState = {
  current: LANG.EN
}

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<Lang>) {
      state.current = action.payload
      i18n.changeLanguage(action.payload)
    }
  }
})

export const { setLang } = langSlice.actions
export default langSlice.reducer
