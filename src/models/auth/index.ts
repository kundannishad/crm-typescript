import { Auth } from "../../mysql/auth/auth";

export default class AuthModel {

//  async getById(Id) {
//         return await Auth.findByPk(Id);
//     }

public static async getById(id: number) {
    return await Auth.findByPk(id);
  }

}

//module.exports = new AuthModel();