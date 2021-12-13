module.exports = {
  up: async (queryInterface, Sequelize) => {
    const insertSection = [];
    const name = ['Sale', 'Best', 'New', 'Bundle'];
    const color = ['#e4d744', '#add6db', '#80c021', '#312f2f'];
    for (let i = 0; i < name.length; i++) {
      insertSection.push({
        name: name[i],
        color: color[i],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('section', insertSection);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('section', null, {});
  },
};
