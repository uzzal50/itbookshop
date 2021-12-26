import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cartContext'

const CartTotal = () => {
  const { total_amount } = useCartContext()
  console.log(total_amount)
  return (
    <Wrapper>
      {' '}
      <span></span>
      <h5>Total Amount</h5>
      <h5>${total_amount}</h5>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  @media (min-width: 600px) {
     {
      display: grid;
      grid-template-columns: 210px 2fr 1fr 100px;
    }
  }
`
export default CartTotal
