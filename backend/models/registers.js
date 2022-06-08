const Registers = (sequelize, DataTypes) => {
  const Register = sequelize.define('Registers', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true, 
    },
    name: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    age: DataTypes.INTEGER,
  },
  { timestamps: false });

  return Register;
};

module.exports = Registers;