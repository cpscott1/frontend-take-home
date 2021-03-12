import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react'

const Home = () => {

  const [shop, setShop] = useState({
    products: [],
    search: ''
  })

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(products => setShop({ ...shop, products: products }))

  },[])

  const { products } = shop

  console.log(products)

  return (
    <Box>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image}/>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </Box>
  )
}

export default Home
