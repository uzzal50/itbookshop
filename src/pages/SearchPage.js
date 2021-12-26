import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import BooksContent from '../components/BooksContent'
import Loading from '../components/Loading'

const SearchPage = () => {
  const { query } = useParams()
  const [book, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [pageCount, setPageCount] = useState(0)
  const [totalResults, setTotalResults] = useState(0)

  const getSearchBooks = async () => {
    const { data } = await axios.get(
      `https://api.itbook.store/1.0/search/${query}?page=1}`
    )
    setBooks(data.books)
    setLoading(false)
    setTotalResults(data.total)
    setPageCount(Math.ceil(data.total / 10))
  }

  const fetchNextBooks = async (currentPage) => {
    const { data } = await axios.get(
      `https://api.itbook.store/1.0/search/${query}?page=${currentPage}`
    )
    setBooks(data.books)
  }
  useEffect(() => {
    getSearchBooks()
  }, [pageCount, query])

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1
    console.log(currentPage)
    fetchNextBooks(currentPage)
  }

  if (loading) {
    return (
      <Wrapper>
        <Loading title='Searching'></Loading>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <BooksContent
        books={book}
        title={`Total ${totalResults} Search Results Found  for "${query}"`}
      />
      <Row>
        <Col md={12}>
          <ul className='link'>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={'pagination justify-content-center'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
            />
          </ul>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default SearchPage
