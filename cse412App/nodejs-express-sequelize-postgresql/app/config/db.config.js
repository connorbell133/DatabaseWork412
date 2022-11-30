module.exports = {
    host: "localhost",
    user: "postgres",
    password: "8014",
    db: "NFL",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };