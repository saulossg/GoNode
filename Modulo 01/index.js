// CRIANDO SERVIDOR HTTP (SIMPLES)
// const http = require("http");

// http
//   .createServer((req, res) => {
//     console.log(req);
//     return res.end("Hello World");
//   })
//   .listen(3000);

const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

// const logMiddleware = (req, res, next) => {
//   console.log(
//     `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
//   );

//   req.appName = "GoNode";

//   return next();
// };

// app.use(logMiddleware);

// app.get("/", logMiddleware, (req, res) => {
//   return res.send(`Bem vindo ao ${req.appName}`);
// });

// //name=diego&&name=joao
// app.get("/parametros", (req, res) => {
//   return res.send(`Varios parametros pela url: ${req.query.name}`);
// });

// app.get("/login", (req, res) => {
//   return res.send("Login");
// });

// app.get("/nome/:name", (req, res) => {
//   return res.send(`Bem Vindo, ${req.params.name}`);
// });

// app.get("/contato", (req, res) => {
//   return res.json({
//     message: "Seja bem vindo"
//   });
// });

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const users = ['saulo', 'marcelo', 'eber']

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3000)
