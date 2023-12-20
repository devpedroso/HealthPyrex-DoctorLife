import { Role } from "../enum/userEnum";

export type User = {
  id?: number;
  birthDay?: string;
  cpf?: string;
  crm?: string;
  expertise?: string;
  isActive?: boolean;
  game?: string;
  email?: string;
  role?: Role;
  name?: string;
  gender?: string;
  nameid?: string;
};
