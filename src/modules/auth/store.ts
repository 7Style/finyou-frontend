import service from '@/services'
import {
  ForgotPasswordAPIPayload,
  ForgotPasswordResponse,
  RegisterAPIPayload,
  RegisterResponse,
  ResetPasswordAPIPayload,
  ResetPasswordResponse,
} from './types'
import { ENDPOINTS } from '@/lib/endpoints'

export async function resetPassword(payload: ResetPasswordAPIPayload): Promise<ResetPasswordResponse> {
  return service({
    url: ENDPOINTS.RESET_PASSWORD,
    method: 'POST',
    body: payload.data,
  })
}

export async function register(payload: RegisterAPIPayload): Promise<RegisterResponse> {
  try {
    const response = await service({
      url: ENDPOINTS.REGISTER,
      method: 'POST',
      body: payload.data,
    })
    return response.data
  } catch (error) {
    throw new Error('Failed to register. Please try again later.')
  }
}

// Login
export async function login({ username, password }: { username: string; password: string }) {
  return service({
    method: 'POST',
    noAuth: true,
    url: ENDPOINTS.LOGIN,
    body: {
      username,
      password,
    },
  })
}

export async function getUser(token: string) {
  return service({
    method: 'GET',
    url: ENDPOINTS.PROFILE,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export async function refreshToken(token: string) {
  return service({
    method: 'POST',
    url: ENDPOINTS.REFRESH_TOKEN,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export async function forgotPassword(payload: ForgotPasswordAPIPayload): Promise<ForgotPasswordResponse> {
  return service({
    url: ENDPOINTS.FORGOT_PASSWORD,
    method: 'POST',
    body: payload.data,
  })
}
