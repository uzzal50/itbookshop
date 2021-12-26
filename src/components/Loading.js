import React from 'react'
import styled from 'styled-components'

const Loading = ({ title }) => {
  return (
    <Wrapper>
      <div className='title text-center'>
        <h4>{title}...</h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
   {
  }
`
export default Loading
