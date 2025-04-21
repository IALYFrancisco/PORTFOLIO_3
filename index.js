const express = require('express')
const path = require('path')
const body_parser = require('body-parser')
const dotenv = require('dotenv')
const app_routes = require('./src/routes/app_routes')
const auth_routes = require('./src/routes/auth_routes')
const backoffice_routes = require('./src/routes/backoffice_routes')
const app = express();

dotenv.config();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'src/public')));

app.use(body_parser.urlencoded({extend:true}))

app.use('/', app_routes)

app.use('/backoffice', backoffice_routes.backoffice_routes)

app.use('/authentication', auth_routes.auth_routes)

app.listen(process.env.APP_PORT, () => {
  console.log(`L'application est en cours d'exécution sur ${process.env.APP_ADDRESS}`);
});
