import { Model, DataTypes, Sequelize } from 'sequelize';
import db from '../../config/database';
import { UserType } from '../../interface/auth';

class Auth extends Model<UserType> implements UserType {
  public id!: number;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public phone_no!: string;
  public username!: string;
  public otp!: number;
  public password!: string;
  public social_token!: string;
  public token!: string;
  public image_url!: string;
  public dob!: Date;
  public login_by!: boolean;
  public is_active!: boolean;
  public email_verified_at!: Date;
  public remember_token!: string;
  public created_at!: Date;
  public updated_at!: Date;
}
Auth.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    social_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    login_by: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    remember_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Auth',
    tableName: 'users',
    timestamps: false, // Disable automatic timestamps
  }
);

// Sync the model with the database
//await sequelize.sync();

export { Auth };
