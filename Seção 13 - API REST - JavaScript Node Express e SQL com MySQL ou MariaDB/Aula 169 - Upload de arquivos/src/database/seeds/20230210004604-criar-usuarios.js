const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'false@false.com',
          password_hash: await bcryptjs.hash('000000', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe 2',
          email: 'false1@false.com',
          password_hash: await bcryptjs.hash('222222', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe 1',
          email: 'false2@false.com',
          password_hash: await bcryptjs.hash('111111', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe 3',
          email: 'false3@false.com',
          password_hash: await bcryptjs.hash('333333', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  async down() {},
};
