import { booksService } from '../../services/booksService.js'
import { utilService } from '../../services/util.service.js'

import { Loader } from '../Loader.jsx'
import { Reviews } from './Reviews.jsx'
import { AddReview } from './AddReview.jsx'

const { useState, useEffect, useRef } = React
const { useParams, useNavigate } = ReactRouter

const { Link } = ReactRouterDOM

const { get } = booksService

export function BookDetails({ currBookDetails, onChangeRoute }) {
  const [book, setBook] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [reviews, setReviews] = useState()

  const params = useParams()
  const navigate = useNavigate()

  let isMore = useRef(false)
  const [read, setRead] = useState(isMore.current)

  useEffect(() => {
    setIsLoading(true)
    booksService
      .get(params.bookId)
      .then((book) => {
        setBook(book)
        // setReviews(book.reviews)
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

  function toggleRead() {
    isMore.current === true ? (isMore.current = false) : (isMore.current = true)
    console.log(isMore.current)
    console.log(book)
    setRead(isMore.current)
  }

  function saveReview(review) {
    console.log('reviews:', reviews)
    console.log('book.reviews:', book.reviews)

    review.id = utilService.makeId()
    book.reviews.unshift(review)

    booksService.save(book).then(setReviews(...book.reviews))
  }

  function removeReview(reviewIdx) {
    // console.log(reviews)
    book.reviews.splice(reviewIdx, 1)
    booksService.save(book).then(setReviews(...book.reviews))
  }

  if (isLoading) return <Loader />
  return (
    <React.Fragment>
      <Link to='/book'>
        <button>x</button>
      </Link>
      <div className='book-page'>
        <div className='book-details'>
          <img src={book.cover} alt='' />
          <h2>{book.title}</h2>
          <h3>
            Price:{' '}
            <span
              className={
                book.listPrice.amount > 350
                  ? 'expensive'
                  : undefined || book.listPrice.amount < 200
                  ? 'cheap'
                  : undefined
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
              return <span key={author}>{author}</span>
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
          <p>
            {isMore.current === false &&
              book.description.substring(0, 80) + '...'}
            {isMore.current === true && book.description}
            <br></br>
            <span className='btn read-more' onClick={toggleRead}>
              {book.description.length > 100 &&
                !isMore.current &&
                'Read more...'}
              {book.description.length > 100 &&
                isMore.current &&
                'Read less...'}
            </span>
          </p>
        </div>
        <div className='review-container'>
          <AddReview book={book} saveReview={saveReview} />
          <Reviews book={book} removeReview={removeReview} reviews={reviews} />
        </div>
      </div>
      <div className='button-container'>
        <Link to={`/book/${book.prevBookId}`}>
          <button className='btn'>Prev</button>
        </Link>
        <Link to={`/book/${book.nextBookId}`}>
          <button className='btn'>Next</button>
        </Link>
      </div>
    </React.Fragment>
  )
}
