import { Auth } from "../../mysql/auth/auth";

class AuthModel {
  
  public static async getById(id: number) {
    return await Auth.findByPk(id);
  }

}

export { AuthModel };