const path = require('path');

const configEnv = () => {
  const envFilePath = path.resolve(__dirname, `.env`);
  require('dotenv').config({ path: envFilePath });

  return {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    DB_URL: process.env.DB_URL,
  };
};

module.exports = { configEnv };