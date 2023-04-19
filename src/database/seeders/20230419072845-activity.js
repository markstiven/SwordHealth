'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('activities', [
      {
        title: 'Node.Js',
        detail: 'Test developed by node.js',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1
     },
     {
      title: 'React.Js',
      detail: 'Test developed by react/redux',
      created_at: new Date(),
      updated_at: new Date(),
      user_id: 1
     },
     {
      title: 'JAVA',
      detail: 'Test develope by JAVA 8 and DB MYSQL',
      created_at: new Date(),
      updated_at: new Date(),
      user_id: 3
     },
     {
      title: 'MySQL',
      detail: 'Test developed by MySQL-DB',
      created_at: new Date(),
      updated_at: new Date(),
      user_id: 3
     },     {
      title: 'MongoDB',
      detail: 'Test developed by MongoDB',
      created_at: new Date(),
      updated_at: new Date(),
      user_id: 3
     },
     

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('activities', null, {});
  }
};
