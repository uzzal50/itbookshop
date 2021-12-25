import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BookList = ({ book }) => {
  return (
    <Col md={3} className='mb-5'>
      <Card className='h-100'>
        <Link to={`/book/${book.isbn13}`}>
          <Card.Img variant='top' src={book.image} className='img-fluid' />
        </Link>
        <Card.Body>
          <div className='book-title'>
            <h6>{book.title} </h6>
            <span>{book.price}</span>
          </div>
        </Card.Body>
        {/* <Card.Footer>
          <Row>
            <Col md={12}>
              {' '}
              <Button variant='outline-secondary' className='w-100 my-3'>
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Footer> */}
      </Card>
    </Col>
  )
}
const Wrapper = styled.section``
export default BookList
