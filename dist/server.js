"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const porta = process.env.APP_PORT;
// Já estou usando a porta 3000
_app2.default.listen(porta);
