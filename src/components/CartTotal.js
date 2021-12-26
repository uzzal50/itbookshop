import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cartContext'

const CartTotal = () => {
  const { total_amount } = useCartContext()

  return (
    <Wrapper>
      {' '}
      <span></span>
      <h6>Total Amount</h6>
      <h6>${total_amount}</h6>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  h6 {
    text-align: center;
  }
  @media (min-width: 600px) {
     {
      display: grid;
      grid-template-columns: 210px 2fr 1fr 100px;
    }
    h6 {
      text-align: left;
    }
  }
`
export default CartTotal
