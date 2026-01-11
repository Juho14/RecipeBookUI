import { Button } from '@mui/material'
import { setLang } from '../../store/langSlice'
import { useDispatch } from 'react-redux'
import { LANG, type Lang } from '../../types/ui/Lang'

const LangSelector = () => {
  const dispatch = useDispatch()

  const updateLanguage = (lang: Lang) => {
    dispatch(setLang(lang))
  }
  return (
    <>
      <Button onClick={() => updateLanguage(LANG.FI)}>FI</Button>
      <Button onClick={() => updateLanguage(LANG.EN)}>EN</Button>
    </>
  )
}
export default LangSelector
