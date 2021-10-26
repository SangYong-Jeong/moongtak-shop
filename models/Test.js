module.exports = (sequelize, DataType) => {
  // define("객체명", "객체속성", "객체옵션")
  const Test = sequelize.define(
    'Test',
    {
      name: {
        type: DataType.STRING(255),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      tableName: 'test',
      timestamps: true,
      paranoid: true,
    }
  );
  return Test;
};
