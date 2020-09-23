const app = require('./config/server');
const connection = require('./config/dbConnection');
const routeHome = require('./app/routes/home');
const routeNotas = require('./app/routes/notas');
const routeProfessor = require('./app/routes/professor');
const routeProgramatico = require('./app/routes/programatico');
const routeAdmin = require('./app/routes/admin');

routeHome(app);
routeNotas(app);
routeProfessor(app);
routeProgramatico(app);
routeAdmin(app);
