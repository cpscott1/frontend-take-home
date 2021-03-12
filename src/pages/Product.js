import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image, Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { createBreakpoints } from "@chakra-ui/theme-tools"

const Product = ({ products }) => {

  const params = useParams()

  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  })

  const item = products.find(product => product.id === parseInt(params.id))
  return (
      <Flex flexDirection="column" textAlign="center">
        <Box>
          <Image src={item.image} w={{md: "40%", lg: "50%"}} h={["25vh", "35vh"]} objectFit="contain" m="auto"/>
        </Box>
        <Box>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </Box>
      </Flex>
  )
}

export default Product
