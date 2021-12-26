import React from 'react'
import { useCartContext } from '../context/cartContext'
import styled from 'styled-components'

import CartItem from '../components/CartItem'
import CartTotal from '../components/CartTotal'

const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className='title text-center'>
          <h3>Your Cart is Empty</h3>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper className='cart-wrapper'>
      <div className='title'>
        <h4>Cart</h4>
      </div>
      <div className='content'>
        <span></span>
        <h6>Title</h6>
        <h6>Price</h6>
      </div>
      <hr className='line' />
      {cart.map((item, index) => {
        return <CartItem key={index} {...item} />
      })}
      <hr className='line' />
      <CartTotal />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .content {
    display: none;
  }
  @media (min-width: 600px) {
    .content {
      display: grid;
      grid-template-columns: 210px 2fr 1fr 100px;
    }
    .line {
      color: #bcccdc;
    }
  }
`

export default CartPage
