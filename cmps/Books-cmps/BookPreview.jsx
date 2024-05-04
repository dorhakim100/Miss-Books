export function BookPreview({ book }) {
  return (
    <div className='book-container front' key={book.id}>
      <div className='text-container'>
        <h2>{book.title}</h2>
        <h4>{book.subtitle}</h4>
        <h4>
          Categories:{' '}
          {book.categories.map((category) => {
            return <h5>{category}</h5>
          })}
        </h4>
      </div>
      <img src={book.cover} alt='' />
    </div>
  )
}
