import { Model, Sequelize } from "sequelize";

type UserAttributes = {
  id: typeof import("uuid").v4;
  first_name: string;
  last_name: string;
  user_name: string;
};

type UserCreationAttributes = Required<UserAttributes>;

export default (sequelize: Sequelize, DataTypes: any) => {
  class User extends Model<UserAttributes, UserCreationAttributes> {}

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      user_name: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
