import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DB_NAME,
      port: process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
    },
    apiKey: process.env.API_KEY,
  };
});
