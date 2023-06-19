declare class UserValidator {
    checkCreateUser(): import("express-validator").ValidationChain[];
    checkReadUser(): import("express-validator").ValidationChain[];
    checkIdParam(): import("express-validator").ValidationChain[];
}
declare const _default: UserValidator;
export default _default;
