import { Role } from "./Role";

export class User{
    email: string = '';
    username: string = '';
    password: string = '';
    role: Role = new Role;
}