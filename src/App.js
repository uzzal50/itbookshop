import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Error, SingleBook, Search, Cart } from './pages'
import { Container, Row } from 'react-bootstrap'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/book/:id' element={<SingleBook />}></Route>
            <Route exact path='/cart' element={<Cart />}></Route>
            <Route exact path='/search/:query' element={<Search />}></Route>
            <Route exact path='*' element={<Error />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
