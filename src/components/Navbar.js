import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCartContext } from '../context/cartContext'
import { Container } from 'react-bootstrap'
import SearchForm from './SearchForm'

const Navbar = () => {
  const { cart } = useCartContext()

  return (
    <Wrapper className='navbar-wrapper'>
      <Container>
        <nav>
          <Link to='/' className='logo'>
            ITBook<span style={{ color: '#9c00dd' }}>Shop</span>{' '}
          </Link>

          <SearchForm />

          <Link
            to='/cart'
            className='d-flex justify-content-end align-items-center logo cart'
          >
            Cart
            <span className='cart-container'>
              <FaShoppingCart />
              <span className='cart-value'>{cart.length}</span>
            </span>
          </Link>
        </nav>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  nav {
    padding: 15px 0;
    .cart {
      position: absolute;
      top: 15px;
      right: 22px;
    }
  }
   {
    @media (min-width: 600px) {
      nav {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        padding: 25px 0;
        .cart {
          position: relative;
          top: 0;
          right: 0;
        }
      }
    }
    .logo {
      text-decoration: none;
      color: #000000ff;
      font-size: 1.4rem;
      font-weight: 600;
    }

    .cart-container {
      display: flex;
      align-items: center;
      position: relative;
      color: #9c00dd;
      svg {
        height: 1.6rem;
        margin-left: 10px;
      }
    }
    .cart-value {
      position: absolute;
      top: -10px;
      right: -16px;
      background: #9c00dd;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.85rem;
      font-weight: 600;
      color: #fff;
      padding: 12px;
    }
  }
`

export default Navbar
