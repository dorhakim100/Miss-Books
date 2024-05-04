const { useState, useEffect } = React
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

export function Books() {
  let [books, setBooks] = useState([])

  query('books').then((res) => {
    books = res
    setBooks(books)
  })

  // console.log(get('books', 'n2FbDr'))

  return (
    <React.Fragment>
      <div className='books-header'>
        <h2>Books</h2>
        <BooksFilter />
      </div>
      <BooksList books={books} />
    </React.Fragment>
  )
}
