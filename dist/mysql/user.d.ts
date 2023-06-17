import { Model } from 'sequelize';
interface UserAttributes {
    Id: number;
    FirstName: string;
    LastName: string;
    MobileNo: string;
    Email: string;
    UserName: string;
    Password: string;
    Active: boolean;
}
export declare class UserInstance extends Model<UserAttributes> {
}
export {};
