import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const Product = ({ products }) => {

  const params = useParams()
  console.log(params)

  const item = products.find(product => product.id === parseInt(params.id))
  return (
      <Grid templateColumns="repeat(2, 1fr)">
        <Box>
          <img src={item.image} />
        </Box>
        <Box>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </Box>
      </Grid>
  )
}

export default Product
