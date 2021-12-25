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
          <Image src={image}></Image>
        </Link>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <Button onClick={() => removeFromCart(id)} variant='outline'>
          {' '}
          Remove
        </Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .cart-item-container {
    display: grid;
    grid-template-columns: 210px 2fr 1fr auto;

    align-items: center;
    img {
      width: 120px;
    }
  }
`

export default CartItem
