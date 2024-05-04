import { BookPreview } from './BookPreview.jsx'

export function BooksList({ books }) {
  //   console.log(books)
  return (
    <ul>
      <li>
        {books.map((book) => {
          return (
            <div className='book-container' key={book.id}>
              <div className='text-container'>
                <h2>{book.title}</h2>
                <BookPreview bookDescription={book.description} />
              </div>
              <img src={book.cover} alt='' />
            </div>
          )
        })}
      </li>
    </ul>
  )
}
