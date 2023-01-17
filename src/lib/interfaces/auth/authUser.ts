import { Roles } from '../../constants/Roles';

export interface User {
    username: string;
    email: string;
    rol: Roles | string;
}

export interface AuthUser {
    accessToken: string,
    user: User
}