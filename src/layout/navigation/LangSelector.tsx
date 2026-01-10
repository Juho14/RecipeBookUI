import { Button } from '@mui/material'
import { setLang } from '../../store/langSlice'
import { useDispatch } from 'react-redux'
import { LANG } from '../../types/ui/Lang'

const LangSelector = () => {
  const dispatch = useDispatch()
  return (
    <>
      <Button onClick={() => dispatch(setLang(LANG.FI))}>FI</Button>
      <Button onClick={() => dispatch(setLang(LANG.EN))}>EN</Button>
    </>
  )
}
export default LangSelector
