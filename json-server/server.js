const jsonServer = require('json-server');
const path = require('path')
const fs = require("fs");
const {message} = require("eslint-plugin-i18next/lib/options/defaults");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'))

server.use(jsonServer.defaults())
server.use(jsonServer.bodyParser)

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800)
  })
  next();
})

server.post('/login', (req, res) => {
  try {
    const {username, password} = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));

    const {users = []} = db;

    const userFromDb = users.find(user => user.username === username && user.password === password);

    if (userFromDb) {
      return res.json(userFromDb)
    }

    return res.status(403).json({message: 'User is not found'})
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message });
  }
})

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({message: 'Не авторизован'})
  }

  next()
})

server.use(router)

server.listen(8000, () => {
  console.log('JSON Server is running')
})

