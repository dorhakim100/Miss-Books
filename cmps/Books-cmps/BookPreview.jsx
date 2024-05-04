export function BookPreview({ book }) {
  return (
    <div className='book-container' key={book.id}>
      <div className='text-container'>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
      </div>
      <img src={book.cover} alt='' />
    </div>
  )
}
