import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { RegisterAPIMutationPayload, RegisterProps, RegisterResponse } from '../types'
import { register } from '../store'

export function useRegister(
  props: RegisterProps = {}
): UseMutationResult<RegisterResponse, { message?: string }, RegisterAPIMutationPayload> {
  return useMutation({
    mutationFn: payload => {
      return register({ ...props, data: payload })
    },
  })
}
