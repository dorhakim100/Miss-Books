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

export function Books() {
  const [route, setRoute] = useState('BooksList')
  let [books, setBooks] = useState([])

  query('books').then((res) => {
    books = res
    setBooks(books)
  })

  // console.log(get('books', 'n2FbDr'))
  let currBookDetails = useRef()

  function onChangeRoute(route, book) {
    console.log(book)
    currBookDetails.current = book
    setRoute(route)
  }

  return (
    <React.Fragment>
      <div className='books-header'>
        <h2>Books</h2>
        <BooksFilter />
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
