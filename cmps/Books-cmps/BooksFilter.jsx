export function BooksFilter() {
  return (
    <div className='filter-container'>
      <label htmlFor=''>Title:</label>
      <input type='text' />

      <label htmlFor=''>Price:</label>
      <input type='range' />
    </div>
  )
}
