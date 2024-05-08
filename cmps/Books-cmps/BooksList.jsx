import { BookPreview } from './BookPreview.jsx'
import {
  asyncStorageServer,
  storageService,
} from '../../services/async-storage.service.js'
import { booksService } from '../../services/booksService.js'

const { getDefaultFilter, query, get, post, put, remove } = booksService

const { Link } = ReactRouterDOM

export function BooksList({ books, onChangeRoute, currBookDetails, onRemove }) {
  //   console.log(books)

  function onSetBookDetails(elBook) {
    const bookId = elBook.dataset.bookId
    // console.log(bookId)
    currBookDetails = get(bookId).then((res) => {
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
              <div
                key={book.title}
                className='book flipper'
                data-bookId={book.id}
              >
                <BookPreview book={book} />
                {/* <div>hey</div> */}
                <div className='btn-container'>
                  <Link to={`/book`}>
                    <button
                      className='btn full-details back'
                      data-book-id={book.id}
                      onClick={onRemove}
                    >
                      Remove
                    </button>
                  </Link>
                  <Link to={`/book/${book.id}`}>
                    <button
                      className='btn full-details back'
                      data-book-id={book.id}
                    >
                      Full details
                    </button>
                  </Link>
                  <Link to={`/book/edit/${book.id}`}>
                    <button
                      className='btn full-details back'
                      data-book-id={book.id}
                    >
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </li>
    </ul>
  )
}
