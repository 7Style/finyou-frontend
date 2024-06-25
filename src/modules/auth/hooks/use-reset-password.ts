import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { ResetPassword, ResetPasswordAPIMutationPayload, ResetPasswordResponse } from '../types'
import { resetPassword } from '../store'

export function useResetPassword(
  props: ResetPassword = {}
): UseMutationResult<ResetPasswordResponse, { message?: string }, ResetPasswordAPIMutationPayload> {
  return useMutation({
    mutationFn: payload => {
      return resetPassword({ ...props, data: payload })
    },
  })
}
