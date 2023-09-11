const { faker } = require('@faker-js/faker')
const express = require('express')
const app = express()

const port = process.env.PORT || 1234

app.get('/', (req, res) => {
  res.json({ message: 'Mi first server' })
})

app.get('/products', (req, res) => {
  const products = []
  for (let index = 0; index < 50; index++) {
    products.push(
      {
        name: faker.commerce.product(),
        price: parseInt(faker.commerce.price({ symbol: '$' }), 10),
        image: faker.image.url()
      }
    )
  }
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params
  res.json(
    {
      id,
      name: 'Product 2',
      price: 2000
    }
  )
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json(
    {
      categoryId,
      productId
    }
  )
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json(
      {
        limit,
        offset
      }
    )
  } else {
    res.send('There are no parameters')
  }
})

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
