module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "node7project",
    dialect: "mysql",
    //connection ko kura haru ie katy ota  connection garna dinee katy ota request ,response time waiting time  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };