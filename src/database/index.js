import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

// Todos os models
const models = [Aluno, User, Foto];
// Cria a conexão, o sequelize do Model
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

models.forEach((model) => model.associate && model.associate(connection.models));
