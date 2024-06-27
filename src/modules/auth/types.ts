/* ForgotPassword*/
export interface ForgotPassword {}

export interface ForgotPasswordResponse {
  message: string
}

export interface ForgotPasswordAPIMutationPayload {
  email: string
}

export interface ForgotPasswordAPIPayload {
  data: ForgotPasswordAPIMutationPayload
}

/* Register */
export interface RegisterProps {}

export interface RegisterResponse {
  message: string
  data: {
    email: string
  }
}

export interface RegisterAPIMutationPayload {
  email: string
  password: string
  name?: string
  username?: string
  surname?: string
}

export interface RegisterAPIPayload {
  data: RegisterAPIMutationPayload
}

/* ResetPassword*/
export interface ResetPassword {}

export interface ResetPasswordResponse {
  message: string
  data: {
    email: string
  }
}

export interface ResetPasswordAPIMutationPayload {
  password: string
  hash: string | null
}

export interface ResetPasswordAPIPayload {
  data: ResetPasswordAPIMutationPayload
}
