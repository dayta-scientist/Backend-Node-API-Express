const express = require('express')
const routerApi = require('./routes')

const app = express()
const port = process.env.PORT || 1234

app.use(express.json())

app.get('/', (req, res) => {
  res.send({ message: 'Mi first server' })
})

routerApi(app)
app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
