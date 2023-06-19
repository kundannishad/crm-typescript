import { DataTypes, Model } from 'sequelize'
import db from '../config/database'

interface UserAttributes {
  Id: number
  FirstName: string
  LastName: string
  MobileNo: string
  Email: string
  UserName: string
  Password: string
  Active: boolean
}


export class UserInstance extends Model<UserAttributes> { }

UserInstance.init(
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MobileNo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true

    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true

    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true

    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    sequelize: db,
    tableName: 'Users',
    timestamps: false // Disable automatic timestamps

  }
);

