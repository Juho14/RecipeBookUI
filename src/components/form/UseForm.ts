import {
  useForm as useHookForm,
  type FieldValues,
  type DefaultValues,
  type Resolver,
  type UseFormReturn,
  type SubmitHandler
} from 'react-hook-form'
import { resolverWrapper } from './ResolverWrapper'

interface ExtendedUseFormOptions<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown
> {
  defaultValues: DefaultValues<TFieldValues>
  resolver?: Resolver<TFieldValues, TContext>
  mode?: 'onBlur' | 'onChange' | 'onSubmit'
  shouldUnregister?: boolean
  onSubmit: (data: TFieldValues) => void
}

export interface ExtendedUseFormReturn<
  TFieldValues extends FieldValues,
  TContext = unknown
> extends UseFormReturn<TFieldValues, TContext> {
  onSubmit: SubmitHandler<TFieldValues>
}

const useForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown
>(
  options: ExtendedUseFormOptions<TFieldValues, TContext>
): ExtendedUseFormReturn<TFieldValues, TContext> => {
  const {
    defaultValues,
    resolver,
    mode = 'onBlur',
    shouldUnregister = false,
    onSubmit: userOnSubmit
  } = options

  const wrappedResolver = resolver ? resolverWrapper(resolver) : undefined

  const form = useHookForm<TFieldValues, TContext>({
    defaultValues,
    resolver: wrappedResolver,
    mode,
    shouldUnregister
  })

  const onSubmit: SubmitHandler<TFieldValues> = (data) => {
    userOnSubmit(data)
  }

  return {
    ...form,
    onSubmit
  }
}

export default useForm
