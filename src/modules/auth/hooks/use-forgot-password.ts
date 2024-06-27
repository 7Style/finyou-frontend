import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { ForgotPassword, ForgotPasswordAPIMutationPayload, ForgotPasswordResponse } from '../types'
import { forgotPassword } from '../store'

export function useForgotPassword(
  props: ForgotPassword = {}
): UseMutationResult<ForgotPasswordResponse, { message?: string }, ForgotPasswordAPIMutationPayload> {
  return useMutation({
    mutationFn: payload => {
      return forgotPassword({ ...props, data: payload })
    },
  })
}
