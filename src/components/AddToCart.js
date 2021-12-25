import React, { createContext, useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import styled from 'styled-components'

const AddToCart = ({ book }) => {
  const { isbn13: bookId, image, title, price } = book

  const { addToCart } = useCartContext()

  return (
    <AddToContainer>
      <Link to='/cart' onClick={() => addToCart(bookId, image, title, price)}>
        <Button variant='outline' className='btn'>
          Buy
        </Button>
      </Link>
    </AddToContainer>
  )
}

const AddToContainer = styled.main`
  .btn {
    width: 300px;
    border: 1px solid #ced4da;
    font-size: 18px;
  }

  .btn:hover {
    background: #9c00dd;
    color: #fff !important;
  }
`

export default AddToCart
