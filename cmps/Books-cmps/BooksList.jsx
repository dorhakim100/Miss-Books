import { BookPreview } from './BookPreview.jsx'
import {
  asyncStorageServer,
  storageService,
} from '../../services/async-storage.service.js'

const { query, get, post, put, remove } = storageService

export function BooksList({ books, onChangeRoute, currBookDetails }) {
  //   console.log(books)

  function onSetBookDetails(elBook) {
    const bookId = elBook.dataset.bookId
    // console.log(bookId)
    currBookDetails = get('books', bookId).then((res) => {
      currBookDetails = res
      console.log('done')
      console.log(currBookDetails)
      onChangeRoute('BookDetails', currBookDetails)
    })
  }

  return (
    <ul>
      <li>
        {books.map((book) => {
          return (
            <div className='flipper-container'>
              <div key={book.title} className='book flipper'>
                <BookPreview book={book} />
                <button
                  className='btn full-details back'
                  data-book-id={book.id}
                  onClick={(e) => onSetBookDetails(e.target)}
                >
                  Full details
                </button>
              </div>
            </div>
          )
        })}
      </li>
    </ul>
  )
}
