import { utilService } from './util.service.js'
import { asyncStorage } from './async-storage.service.js'

const { loadFromStorage, saveToStorage, makeId, makeLorem } = utilService

const books = loadFromStorage('books') || [
  {
    id: makeId(),
    title: 'Gwent',
    description: makeLorem(),
    cover: '../BooksImages/1.jpg',
    listPrice: {
      amount: 109,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  },
  {
    id: makeId(),
    title: 'Between Here and Gone',
    description: makeLorem(),
    cover: '../BooksImages/2.jpg',
    listPrice: {
      amount: 22,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  },
  {
    id: makeId(),
    title: 'Magic Lantern',
    description: makeLorem(),
    cover: '../BooksImages/3.jpg',
    listPrice: {
      amount: 84,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  },
]

saveBooks()

// localStorage.clear()

console.log(books)

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
