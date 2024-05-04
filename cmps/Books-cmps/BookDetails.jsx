export function BookDetails({ currBookDetails, onChangeRoute }) {
  const book = currBookDetails.current

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
          Price: {book.listPrice.amount}{' '}
          <span>{book.listPrice.currencyCode}</span>
          {book.listPrice.isOnSale && <span className='sale'>SALE!!</span>}
        </h3>
        <h4>
          Author:{' '}
          {book.authors.map((author) => {
            return <span>{author}</span>
          })}
        </h4>
        <h4>Published at: {book.publishedDate}</h4>
        <h4>Language: {book.language}</h4>
        <h4>Pages: {book.pageCount}</h4>
        <h5>{book.subtitle}</h5>
        <p>{book.description}</p>
      </div>
    </React.Fragment>
  )
}
