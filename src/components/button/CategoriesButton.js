import axios from 'axios'
import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoriesButton = () => {
  
  const [ categories, setCategories ] = useState([]);

  useEffect(() =>  {
    axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory")
    .then(resp => {
      setCategories(resp.data);
    }).catch(error => {
      alert(`[error.response.data.err] ${error.response.data.err}`);
    });
  }, [])

  return (
    <Box>
      {categories.map((item) => 
        <Button bgColor="transparent" href="#">{item.name}</Button>
      )}
    </Box>
  )
}

export default CategoriesButton