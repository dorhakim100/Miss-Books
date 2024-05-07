import { booksService } from '../../services/booksService.js'

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter

const { Link } = ReactRouterDOM

// const { get } = booksService

export function BookDetails({ currBookDetails, onChangeRoute }) {
  const [book, setBook] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    booksService
      .get(params.bookId)
      .then((book) => {
        setBook(book)
      })
      .catch(() => {
        alert('Couldnt get book...')
        navigate('/book')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [params.bookId])

  // const book = currBookDetails.current

  const date = new Date()
  const currYear = date.getFullYear()
  console.log(currYear)

  if (isLoading) return <h3>Loading...</h3>
  return (
    <React.Fragment>
      <Link to='/book'>
        <button>x</button>
      </Link>
      <div className='book-details'>
        <img src={book.cover} alt='' />
        <h2>{book.title}</h2>
        <h3>
          Price:{' '}
          <span
            className={
              (book.listPrice.amount > 350 && 'expensive') ||
              (book.listPrice.amount < 200 && 'cheap')
            }
          >
            {book.listPrice.amount}
          </span>{' '}
          <span>{book.listPrice.currencyCode}</span>
          {book.listPrice.isOnSale && <span className='sale'>SALE!!</span>}
        </h3>
        <h4>
          Author:{' '}
          {book.authors.map((author) => {
            return <span>{author}</span>
          })}
        </h4>
        <h4>
          Published at: {book.publishedDate}{' '}
          {currYear - book.publishedDate < 1 && <span> | New</span>}
          {currYear - book.publishedDate >= 10 && <span> | Vintage</span>}
        </h4>
        <h4>Language: {book.language}</h4>
        <h4>
          Page Count: {book.pageCount}{' '}
          {book.pageCount < 100 && <span> | Light Reading</span>}
          {book.pageCount > 200 && book.pageCount < 500 && (
            <span> | Descent Reading</span>
          )}
          {book.pageCount > 500 && <span> | Serious Reading!</span>}
        </h4>
        <h5>{book.subtitle}</h5>
        <p>{book.description}</p>
      </div>
    </React.Fragment>
  )
}
