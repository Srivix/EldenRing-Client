import { Role } from "./Role";

export class User{
    id: number = 0;
    email: string = '';
    username: string = '';
    password: string = '';
    role: Role = new Role;
}