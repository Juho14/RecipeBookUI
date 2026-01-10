import {
  FormProvider,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn
} from 'react-hook-form'
import type { ExtendedUseFormReturn } from './UseForm'

// export type FormProps<TFieldValues extends FieldValues, TTransformedValues = TFieldValues> = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onError' | 'onSubmit'> & Partial<{
//     control: Control<TFieldValues, any, TTransformedValues>;
//     headers: Record<string, string>;
//     validateStatus: (status: number) => boolean;
//     onError: ({ response, error, }: {
//         response: Response;
//         error?: undefined;
//     } | {
//         response?: undefined;
//         error: unknown;
//     }) => void;
//     onSuccess: ({ response }: {
//         response: Response;
//     }) => void;
//     onSubmit: FormSubmitHandler<TTransformedValues>;
//     method: 'post' | 'put' | 'delete';
//     children: React.ReactNode | React.ReactNode[];
//     render: (props: {
//         submit: (e?: React.FormEvent) => void;
//     }) => React.ReactNode | React.ReactNode[];
//     encType: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | 'application/json';
// }>;
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
