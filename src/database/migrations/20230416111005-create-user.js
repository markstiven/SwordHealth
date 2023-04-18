'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        sexuality: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('users');

  }
};
