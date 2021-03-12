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
      console.log(shop)
  }, [])

  return (
    <Box>
      <Text>Home</Text>
    </Box>
  )
}

export default Home
