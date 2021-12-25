import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styled from 'styled-components'

import Loading from './Loading'
import BooksContent from './BooksContent'

const Books = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('https://api.itbook.store/1.0/new')
        setBooks(data.books)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchBooks()
  }, [])

  if (loading) {
    return <Loading title='Loading' />
  }
  return (
    <Wrapper>
      <BooksContent books={books} title='New Release Books' />
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

export default Books
