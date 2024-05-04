import { utilService } from './util.service.js'
import { asyncStorage } from './async-storage.service.js'

const { loadFromStorage, saveToStorage, makeId, makeLorem } = utilService

const books = loadFromStorage('books') || _createBooks()

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
