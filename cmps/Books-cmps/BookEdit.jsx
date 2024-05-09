import { booksService } from '../../services/booksService.js'

import { Loader } from '../Loader.jsx'

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter

const { Link } = ReactRouterDOM

const { get, save } = booksService

export function BookEdit() {
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
        console.log(book)
      })
      .catch(() => {
        alert('Couldnt get book...')
        navigate('/book')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [params.bookId])

  function edit({ target }) {
    const { name: prop, type } = target
    let value

    if (type === 'number') {
      value = +target.value
      const editedBook = { ...book }
      editedBook.listPrice.amount = value
      setBook(editedBook)
    } else if (type === 'text') {
      value = target.value
      setBook((prevBook) => ({ ...prevBook, [prop]: value }))
    }
  }

  function onSaveChanges() {
    save(book)
      .then(() => {
        alert('Successfully changed')
        navigate('/book')
      })
      .catch(() => {
        alert('Couldnt save')
        navigate('/book')
      })
  }
  if (isLoading) return <Loader />
  return (
    <React.Fragment>
      <Link to='/book'>
        <button>x</button>
      </Link>
      <h2 className='edit-header'>Edit</h2>
      <div className='edit-container'>
        <div className='edit title-container'>
          <h3>Book title:</h3>
          <input onChange={edit} type='text' name='title' value={book.title} />
        </div>
        <div>
          <h3>Price:</h3>
          <input
            onChange={edit}
            type='number'
            name='listPrice'
            value={book.listPrice.amount}
          />
        </div>
        <button className='btn submit' onClick={onSaveChanges}>
          Submit
        </button>
        <img src={book.cover} alt='' />
      </div>
    </React.Fragment>
  )
}
