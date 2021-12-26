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
    <Wrapper>
      <div className='title'>
        <h3>Cart</h3>
      </div>
      <div className='content'>
        <span></span>
        <h4>Title</h4>
        <h5>Price</h5>
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
