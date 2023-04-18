'use strict'
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'João',
        age: 28,
        sexuality: 'Male',
        email: 'joao@swordhealth.com',
        password: bcrypt.hashSync('Joao@2023', salt),
        role: 'technician', 
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Maria',
        age: '32',
        sexuality: 'Female',
        email: 'maria@swordhealth.com',
        password: bcrypt.hashSync('Maria@2023', salt),
        role: 'manager',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Carlos',
        age: '45',
        sexuality: 'Male',
        email: 'carlos@swordhealth.com',
        password: bcrypt.hashSync('Carlos@2023', salt),
        role: 'technician',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
