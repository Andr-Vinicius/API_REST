require('dotenv').config();

// CommonJS
module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  /* Campos que listam informações sobre os registros,
  são criado automaticamente */
  define: {
    timestamps: true,
    underscored: true, // Converte de camelCase pra "_" entre os campos
    underscoredAll: true,
    createdAt: 'created_at', // Prevenir bug do underscored
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
