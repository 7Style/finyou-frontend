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
  name?: string;
  username?: string;
  surname?: string;
}

export interface RegisterAPIPayload {
  data: RegisterAPIMutationPayload;
}
