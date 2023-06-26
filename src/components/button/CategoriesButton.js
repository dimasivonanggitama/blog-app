import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesButton = () => {
    
  const categories = [
    "BERITA",
    "HIBURAN",
    "TREN",
    "OLAHRAGA",
    "EKONOMI",
    "UMKM",
    "PROPERTI",
    "GAYA HIDUP",
    "KULINER",
    "PARIWISATA",
    "OTOMOTIF",
    "GAME KASUAL",
    "EDUKASI",
    "SAINS & TEKNOLOGI",
  ]

  return (
    <Box>
      {categories.map((item) => 
        <Button bgColor="transparent" href="#">{item}</Button>
      )}
    </Box>
  )
}

export default CategoriesButton