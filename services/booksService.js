import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const { loadFromStorage, saveToStorage, makeId, makeLorem } = utilService

const books = loadFromStorage('books') || _createBooks()

const BOOK_KEY = 'books'

saveBooks()

// localStorage.clear()

console.log(books)

export const booksService = {
  getDefaultFilter,
  query,
  get,
  remove,
  save,
  getEmptyBook,
}

function createBook() {
  const book = {
    id: makeId(),
    title: '',
    description: makeLorem(),
    thumbnail: '',
    listPrice: {
      amount: 0,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  }
}

function saveBooks() {
  if (!loadFromStorage('books')) saveToStorage('books', books)
}

function _createBooks() {
  const ctgs = ['Love', 'Fiction', 'Poetry', 'Computers', 'Religion']
  const books = []
  for (let i = 0; i < 20; i++) {
    const book = {
      id: utilService.makeId(),
      title: utilService.makeLorem(2),
      subtitle: utilService.makeLorem(4),
      authors: [utilService.makeLorem(1)],
      publishedDate: utilService.getRandomIntInclusive(1950, 2024),
      description: utilService.makeLorem(20),
      pageCount: utilService.getRandomIntInclusive(20, 600),
      categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
      cover: `http://coding-academy.org/books-photos/${i + 1}.jpg`,
      language: 'en',
      listPrice: {
        amount: utilService.getRandomIntInclusive(80, 500),
        currencyCode: 'EUR',
        isOnSale: Math.random() > 0.7,
      },
    }
    books.push(book)
  }
  console.log('books', books)
  return books
}

function getDefaultFilter(filterBy = { txt: '', maxPrice: 0 }) {
  return { txt: filterBy.txt, maxPrice: filterBy.maxPrice }
}

function query(filterBy = {}) {
  return storageService.query(BOOK_KEY).then((books) => {
    if (filterBy.txt) {
      const regExp = new RegExp(filterBy.txt, 'i')
      books = books.filter((book) => regExp.test(book.title))
    }

    if (filterBy.maxPrice) {
      books = books.filter((book) => book.listPrice.amount <= filterBy.maxPrice)
    }

    return books
  })
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId).then((book) => {
    book = _setNextPrevBookId(book)
    return book
  })
}

function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book)
  } else {
    return storageService.post(BOOK_KEY, book)
  }
}

function getEmptyBook(title = '', minPrice = 0) {
  return { title, minPrice }
}

function getDefaultFilter(filterBy = { txt: '', minSpeed: 0 }) {
  return { txt: filterBy.txt, minSpeed: filterBy.minSpeed }
}

function _setNextPrevBookId(book) {
  return storageService.query(BOOK_KEY).then((books) => {
    const bookIdx = books.findIndex((currBook) => currBook.id === book.id)
    const nextBook = books[bookIdx + 1] ? books[bookIdx + 1] : books[0]
    const prevBook = books[bookIdx - 1]
      ? books[bookIdx - 1]
      : books[books.length - 1]
    book.nextBookId = nextBook.id
    book.prevBookId = prevBook.id
    return book
  })
}
