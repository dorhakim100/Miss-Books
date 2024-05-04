export function BookDetails({ currBookDetails, onChangeRoute }) {
  const book = currBookDetails.current

  function closeBookDetails() {
    onChangeRoute('BooksList')
  }

  return (
    <React.Fragment>
      <button onClick={closeBookDetails}>X</button>
      <h2>{book.title}</h2>
      <img src={book.cover} alt='' />
      <h4>
        Price: {book.listPrice.amount}{' '}
        <span>{book.listPrice.currencyCode}</span>
      </h4>
      {book.listPrice.isOnSale && <span className='sale'>SALE!!</span>}
    </React.Fragment>
  )
}
