import React from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../context/cartContext'
const CartItem = ({ id, image, title, price }) => {
  const { removeFromCart } = useCartContext()

  return (
    <Wrapper>
      <div className='cart-item-container'>
        <Link to={`/book/${id}`}>
          <Image src={image} className='w-100'></Image>
        </Link>
        <h6>{title}</h6>
        <h6>{price}</h6>
        <Button
          onClick={() => removeFromCart(id)}
          variant='outline'
          className='btn-sm del-btn'
        >
          {' '}
          Remove
        </Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  @media (min-width: 600px) {
    .cart-item-container {
      display: grid;
      grid-template-columns: 210px 2fr 1fr auto;

      align-items: center;
      img {
        width: 135px !important;
      }
    }
  }
`

export default CartItem
