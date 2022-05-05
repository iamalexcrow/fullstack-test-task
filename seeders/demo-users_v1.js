"use strict";

const fetch = require("node-fetch");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    let users;

    try {
      const request = await fetch("https://jsonplaceholder.typicode.com/users");

      users = (await request.json()).map(
        ({ name, username, email, phone, website }) => {
          const user_id = uuidv4();

          return {
            id: user_id,
            ...(([first_name, last_name]) => ({ first_name, last_name }))(
              name.split(/\s/, 2)
            ),
            user_name: username,
            contacts: {
              id: uuidv4(),
              email,
              phone,
              website,
              user_id,
            },
          };
        }
      );
    } catch (error) {
      console.error(`An error occurs when fetching users: ${error}`);
    }

    if (users) {
      const userInsertResult = await queryInterface.bulkInsert(
        "users",
        users.map(({ contacts, ...user }) => user)
      );

      if (userInsertResult > 0) {
        await queryInterface.bulkInsert(
          "contacts",
          users.map(({ contacts }) => contacts)
        );
      }
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User", null, {});
  },
};
