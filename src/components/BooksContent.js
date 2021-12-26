import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import BookList from './BookList'

const BooksContent = ({ books, title }) => {
  return (
    <Wrapper>
      {' '}
      <div className='title'>
        <h4>{title}</h4>
      </div>
      <div className='content'>
        <Row>
          {books.map((book, index) => {
            return <BookList key={index} book={book} />
          })}
        </Row>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .card-body {
    padding-top: 0 !important;

    .book-title {
      h6 {
        font-size: 18px;
        font-weight: 600;
        text-align: center;
      }
      span {
        font-size: 16px;

        font-weight: 400;
        text-align: center;
        display: block;
      }
    }
  }
`
export default BooksContent
