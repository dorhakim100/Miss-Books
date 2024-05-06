export function BookDetails({ currBookDetails, onChangeRoute }) {
  const book = currBookDetails.current

  const date = new Date()
  const currYear = date.getFullYear()
  console.log(currYear)

  function closeBookDetails() {
    onChangeRoute('BooksList')
  }

  return (
    <React.Fragment>
      <button className='x-btn' onClick={closeBookDetails}>
        X
      </button>
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
        <h4>Pages: {book.pageCount}</h4>
        <h5>{book.subtitle}</h5>
        <p>{book.description}</p>
        <h5>
          Page Count: {book.pageCount}{' '}
          {book.pageCount < 100 && <span> | Light Reading</span>}
          {book.pageCount > 200 && book.pageCount < 500 && (
            <span> | Descent Reading</span>
          )}
          {book.pageCount > 500 && <span> | Serious Reading!</span>}
        </h5>
      </div>
    </React.Fragment>
  )
}
