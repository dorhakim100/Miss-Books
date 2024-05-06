const { useState, useEffect, useRef } = React

export function BooksFilter({ filterBy, onSetFilterBy, resetFilter }) {
  // console.log(filterBy)

  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilterBy(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    const { name, type } = target
    const value = type === 'range' ? +target.value : target.value
    console.log(value)

    setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, [name]: value }))
  }

  function onResetFilter() {
    resetFilter()
  }

  return (
    <div className='filter-container'>
      <label htmlFor='title'>Title:</label>
      <input
        onChange={handleChange}
        value={filterByToEdit.txt}
        name='txt'
        type='text'
        id='title'
        placeholder='Type a title'
      />

      <label htmlFor='price'>Price:</label>
      <span>0</span>
      <input
        onChange={handleChange}
        value={filterByToEdit.maxPrice}
        name='maxPrice'
        type='range'
        id='price'
        min='80'
        max='500'
      />
      <span>{filterByToEdit.maxPrice || 500}</span>
      <button onClick={onResetFilter}>Reset</button>
    </div>
  )
}
