module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      displayname: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      }
    });
  
    return Tutorial;
  };