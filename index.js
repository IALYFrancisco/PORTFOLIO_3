const express = require('express')
const path = require('path')
const body_parser = require('body-parser')
const dotenv = require('dotenv')
const app_routes = require('./src/routes/app_routes')
const auth_routes = require('./src/routes/auth_routes')
const backoffice_routes = require('./src/routes/backoffice_routes')
const session = require('express-session')
const flash = require('connect-flash')
const { isAuthenticated, isAdmin } = require('./src/services/auth_services')
const app = express();

dotenv.config();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'src/public')));

app.use(body_parser.urlencoded({extended:true}))

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(flash())

app.use((request, response, next) => {
  response.locals.error = request.flash('error')
  response.locals.success = request.flash('success')
  response.locals.user = request.session.user
  next()
})

app.use('/', app_routes)

app.use('/backoffice', isAuthenticated, isAdmin, backoffice_routes.backoffice_routes)

app.use('/authentication', auth_routes.auth_routes)

app.listen(process.env.APP_PORT, () => {
  console.log(`L'application est en cours d'exécution sur ${process.env.APP_ADDRESS}`);
});
