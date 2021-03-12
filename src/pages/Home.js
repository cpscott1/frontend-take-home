import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"

const Home = ({ products }) => {

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
})

  return (
    <Grid templateColumns={{md: "repeat(1, 1fr)",  lg: "repeat(3, 1fr)"}}>

      {products.map(product => (
        <Link to={`/${product.id}`}>
          <Grid templateColumns={["repeat(1, 1fr)"]} key={product.id} textAlign="center">
            <Image src={product.image} w={{md: "40%", lg: "50%"}} h={["25vh", "35vh"]} objectFit="contain" m="auto"/>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </Grid>
        </Link>
      ))}
    </Grid>
  )
}

export default Home
