import { Model, Sequelize } from "sequelize";

type ContactAttributes = {
  id: typeof import("uuid").v4;
  email: string;
  phone: string;
  website: string;
  user_id: typeof import("uuid").v4;
};

type ContactCreationAttributes = Required<ContactAttributes>;

export default (sequelize: Sequelize, DataTypes: any) => {
  class Contact extends Model<ContactAttributes, ContactCreationAttributes> {}

  Contact.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      website: DataTypes.STRING,
      user_id: DataTypes.UUID,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Contact",
      tableName: "contacts",
    }
  );
  return Contact;
};
