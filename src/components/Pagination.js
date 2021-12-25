import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Pagination = ({ book }) => {
  const { query } = useParams()
  const [pageNumber, setPageNumber] = useState(1)

  return (
    <Wrapper>
      <Row>
        <Col md={12}>
          <ul className='link'>
            <Button>
              <li>1</li>
            </Button>
            <Button>
              <li>2</li>
            </Button>
          </ul>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.main`
   {
  }
`
export default Pagination
