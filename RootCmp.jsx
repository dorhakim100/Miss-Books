const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { Home } from './cmps/Home.jsx'
import { Books } from './cmps/Books.jsx'
import { About } from './cmps/About.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'
import { BookDetails } from './cmps/Books-cmps/BookDetails.jsx'
import { BookEdit } from './cmps/Books-cmps/BookEdit.jsx'

const { useState } = React

export function RootCmp() {
  // const [route, setRoute] = useState('Home')
  const [route, setRoute] = useState('Books')

  return (
    <Router>
      <AppHeader />

      <main className='content-grid'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<Books />} />
          <Route path='/about' element={<About />} />
          <Route path='/book/:bookId' element={<BookDetails />} />
          <Route path='/book/edit/:bookId' element={<BookEdit />} />
          {/* <Route path="/book/edit/:carId" element={ <BookEdit /> }/> */}
        </Routes>
      </main>
      <footer>Dor Hakim</footer>
    </Router>
  )
}
