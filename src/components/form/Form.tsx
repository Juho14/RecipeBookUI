import {
  FormProvider,
  type FieldValues,
  type SubmitHandler
} from 'react-hook-form'
import type { ExtendedUseFormReturn } from './UseForm'

interface ExtendedFormProps<T extends FieldValues> {
  form: ExtendedUseFormReturn<T>
  resetOnSubmit?: boolean
  children: React.ReactNode
  className?: string
}

const Form = <TFieldValues extends FieldValues>({
  form,
  resetOnSubmit = true,
  children,
  className
}: ExtendedFormProps<TFieldValues>) => {
  const { reset, handleSubmit } = form

  const _onSubmit: SubmitHandler<TFieldValues> = (data) => {
    form.onSubmit(data)
    if (resetOnSubmit) reset()
  }

  return (
    <FormProvider<TFieldValues> {...form}>
      <form onSubmit={handleSubmit(_onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
