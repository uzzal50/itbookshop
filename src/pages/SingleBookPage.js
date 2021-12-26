import React, { useEffect, useState } from 'react'
import { Col, Image, Row, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import AddToCart from '../components/AddToCart'
import axios from 'axios'

const SingleBookPage = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})

  useEffect(() => {
    const getSingleBook = async () => {
      try {
        const { data } = await axios.get(
          `https://api.itbook.store/1.0/books/${id}`
        )

        setBook(data)
      } catch (error) {
        console.log(error)
      }
    }
    getSingleBook()
  }, [])

  return (
    <Wrapper>
      <div className='title'>
        <h4>Book Details</h4>
      </div>
      <Row>
        <Col md={3}>
          <Image src={book.image} className='w-100'></Image>

          <Row>
            <Col md={12}>
              <AddToCart book={book} />
            </Col>
          </Row>
        </Col>
        <Col md={9}>
          <Table striped>
            <tbody>
              <tr>
                <td className='w-50'>Title</td>
                <td className='w-50'>{book.title}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{book.desc}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{book.price}</td>
              </tr>
              <tr>
                <td>Authors</td>
                <td>{book.authors}</td>
              </tr>
              <tr>
                <td>Publishers</td>
                <td>{book.publisher}</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>{book.language}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>{book.rating}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{book.year}</td>
              </tr>
              <tr>
                <td>Pages</td>
                <td>{book.pages}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.section`
   {
  }
`

export default SingleBookPage
