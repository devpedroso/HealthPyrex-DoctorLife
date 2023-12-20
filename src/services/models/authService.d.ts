export type SignInCredentials = {
  email: string;
  password: string;
  role: string;
};

export type AuthResponse = {
  status: string;
  token: string;
  error: string;
  message: string;
};

export type JWTDecode = {
  birthDay?: boolean;
  cpf?: string;
  crm?: string;
  expertise?: string;
  isActive?: boolean;
  name?: string;
  email?: string;
  email?: string;
  role?: string;
  name?: string;
  iat: number;
  nbf: number;
  exp: number;
};
