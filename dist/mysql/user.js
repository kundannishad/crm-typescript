"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInstance = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class UserInstance extends sequelize_1.Model {
}
exports.UserInstance = UserInstance;
UserInstance.init({
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
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
        allowNull: false,
        unique: true
    },
    Email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    UserName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
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
    sequelize: database_1.default,
    tableName: 'Users',
    timestamps: false // Disable automatic timestamps
});
