import { Sequelize } from "sequelize";
import getUser from "./user";
import getContact from "./contact";
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db: any = {};
const models = ["User", "Contact"];

let sequelize: Sequelize;

if (config.use_env_variable && process.env[config.use_env_variable]) {
  sequelize = new Sequelize(process.env[config.use_env_variable] ?? "", config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

models.forEach((modelName: string) => {
  let model: any;

  switch (modelName) {
    case "User":
      model = getUser(sequelize, (Sequelize as any).DataTypes);
      break;
    case "Contact":
      model = getContact(sequelize, (Sequelize as any).DataTypes);
      break;
  }

  db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
