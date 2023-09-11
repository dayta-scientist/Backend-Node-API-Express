const express = require('express')
const app = express()

const port = process.env.PORT || 1234

app.get('/', (req, res) => {
  res.json({ message: 'Mi first server' })
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000
  })
})

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
