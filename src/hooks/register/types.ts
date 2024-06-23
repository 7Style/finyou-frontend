export interface RegisterProps {}

export interface RegisterResponse {
  message: string;
  data: {
    email: string;
  };
}

export interface RegisterAPIMutationPayload {
  email: string;
  password: string;
  fullName?: string;
  companyName?: string;
}

export interface RegisterAPIPayload {
  data: RegisterAPIMutationPayload;
}
