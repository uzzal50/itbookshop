import React, { useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
const SearchForm = () => {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState('')
  const searchHandler = () => {
    navigate(`/search/${searchText}`)
  }
  return (
    <div>
      <Form className='d-flex' onSubmit={() => searchHandler(searchText)}>
        <FormControl
          type='search'
          placeholder='Search Books By Name'
          className='me-2 form-control-sm mt-md-0 mt-2'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Button
          variant='outline'
          disabled={searchText === ''}
          onClick={() => searchHandler(searchText)}
          className='btn-sm mt-md-0 mt-2'
        >
          {' '}
          <Link to='/search' className='text-decoration-none'>
            {' '}
            Search
          </Link>
        </Button>
      </Form>
    </div>
  )
}

export default SearchForm
