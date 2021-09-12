import { Photo } from "./Photo";

export interface User {
    // id: number;
    // username: string;
    // knownAs: string;
    // age: string;
    // gender: string;
    // created: Date;
    // lastActive: Date;
    // photoUrl:string;
    // city: string;
    // country:string;
    // interests?: string;
    // introduction?: string;
    // lookingFor?: string;
    // photos?: Photo[];


    id : string;
    userName : string;
    normalizedUserName : string;
    email : string;
    normalizedEmail : string;
    emailConfirmed: boolean;
    passwordHash : string;
    securityStamp : string;
    concurrencyStamp: string;
    phoneNumber : string;
    phoneNumberConfirmed : boolean;
    twoFactorEnabled : boolean;
    lockoutEnd : Date;
    lockoutEnabled: boolean;
    accessFailedCount : number

}
