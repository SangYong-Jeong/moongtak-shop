module.exports = {
  up: async (queryInterface, Sequelize) => {
    const insertColor = [];
    const name = [
      'Light Grey',
      'Indigo Blue',
      'Pink',
      'Yellow Green',
      'Dark Grey',
      'Black',
      'White',
      'Light Cyan',
      'Orange',
      'Red',
      'Purple',
      'Sky Blue',
    ];
    const code = [
      '#c6c3c3',
      '#363ab0',
      '#d043b2',
      '#bae55d',
      '#4a3f3f',
      '#000000',
      '#e8e3e3',
      '#8bd0cf',
      '#df6626',
      '#d42525',
      '#c470eb',
      '#72a9e3',
    ];
    for (let i = 0; i < name.length; i++) {
      insertColor.push({
        name: name[i],
        code: code[i],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('color', insertColor);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('color', null, {});
  },
};
