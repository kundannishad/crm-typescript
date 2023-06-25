import { Auth } from "../../mysql/auth/auth";
declare class AuthModel {
    static getById(id: number): Promise<Auth | null>;
}
export { AuthModel };
