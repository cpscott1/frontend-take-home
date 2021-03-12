import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react'

const Home = ({ products }) => {


  return (
    <Box>
      
      {products.map(product => (
        <Link to={`/${product.id}`}>
          <div key={product.id}>
            <img src={product.image}/>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </Box>
  )
}

export default Home
