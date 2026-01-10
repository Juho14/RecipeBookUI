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

const Form = <T extends FieldValues>({
  form,
  resetOnSubmit = true,
  children,
  className
}: ExtendedFormProps<T>) => {
  const { reset, handleSubmit } = form

  const _onSubmit: SubmitHandler<T> = (data) => {
    form.onSubmit(data)
    if (resetOnSubmit) reset()
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(_onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
