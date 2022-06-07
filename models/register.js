const Register = (sequelize, DataTypes) => {
  const register = sequelize.define('Registers', {
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

  return register;
};

module.exports = Register;