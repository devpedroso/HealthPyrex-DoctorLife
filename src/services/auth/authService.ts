import { api } from "../api";
import { Role } from "../enum/userEnum";
import { SignInCredentials, AuthResponse } from "../models/authService";

export async function auth({ email, password, role }: SignInCredentials) {
  return api.get(
    `users?email=${email}&password=${password}&role=${role}&_expand=${
      role === Role.patient ? "patient" : "doctor"
    }`
  );
}
