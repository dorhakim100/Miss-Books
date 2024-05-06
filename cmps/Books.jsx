const { useState, useEffect, useRef } = React
const { query, get, post, put, remove } = storageService

/*
query - get all
get - get by id
post - add
put - update
remove - remove
*/

import { utilService } from '../services/util.service.js'
import {
  asyncStorageServer,
  storageService,
} from '../services/async-storage.service.js'

import { BooksList } from './Books-cmps/BooksList.jsx'
import { BooksFilter } from './Books-cmps/BooksFilter.jsx'
import { BookDetails } from './Books-cmps/BookDetails.jsx'
import { booksService } from '../services/booksService.js'

const { getDefaultFilter } = booksService

export function Books() {
  const [route, setRoute] = useState('BooksList')
  let [books, setBooks] = useState([])
  const [filterBy, setFilterBy] = useState(booksService.getDefaultFilter())

  useEffect(() => {
    booksService.query(filterBy).then((books) => setBooks(books))
  }, [filterBy])

  function onSetFilterBy(newFilter) {
    setFilterBy(newFilter)
  }

  // console.log(get('books', 'n2FbDr'))
  let currBookDetails = useRef()

  function onChangeRoute(route, book) {
    console.log(book)
    currBookDetails.current = book
    setRoute(route)
  }

  function resetFilter() {
    setFilterBy(booksService.getDefaultFilter())
  }

  return (
    <React.Fragment>
      <div className='books-header'>
        <h2>Books</h2>
        <BooksFilter
          filterBy={filterBy}
          onSetFilterBy={onSetFilterBy}
          resetFilter={resetFilter}
        />
      </div>
      {route === 'BooksList' && (
        <BooksList
          books={books}
          onChangeRoute={onChangeRoute}
          currBookDetails={currBookDetails}
        />
      )}
      {route === 'BookDetails' && (
        <BookDetails
          currBookDetails={currBookDetails}
          onChangeRoute={onChangeRoute}
        />
      )}
    </React.Fragment>
  )
}
