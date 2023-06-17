"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInstance = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = __importDefault(require("./../config/dbconfig"));
class UserInstance extends sequelize_1.Model {
}
exports.UserInstance = UserInstance;
UserInstance.init({
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    FirstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    LastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    MobileNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    UserName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize: dbconfig_1.default,
    tableName: 'Users',
    timestamps: false // Disable automatic timestamps
});
