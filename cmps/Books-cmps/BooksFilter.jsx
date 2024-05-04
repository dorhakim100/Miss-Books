export function BooksFilter() {
  return (
    <div className='filter-container'>
      <label htmlFor='title'>Title:</label>
      <input type='text' id='title' placeholder='Type a title' />

      <label htmlFor='price'>Price:</label>
      <input type='range' id='price' />
    </div>
  )
}
