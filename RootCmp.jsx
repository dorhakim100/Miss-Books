import { Home } from './cmps/Home.jsx'
import { Books } from './cmps/Books.jsx'
import { About } from './cmps/About.jsx'

const { useState } = React

export function RootCmp() {
  // const [route, setRoute] = useState('Home')
  const [route, setRoute] = useState('Books')

  return (
    <React.Fragment>
      <header>
        <div className='logo'>
          <img src='imgs/woman-reading-a-book-svgrepo-com.svg' alt='' />
          <h1>Miss Books</h1>
        </div>

        <nav>
          <a onClick={() => setRoute('Home')} href='#'>
            Home
          </a>
          <a onClick={() => setRoute('Books')} href='#'>
            Books
          </a>
          <a onClick={() => setRoute('About')} href='#'>
            About
          </a>
        </nav>
      </header>

      <main className='content-grid'>
        {route === 'Home' && <Home />}
        {route === 'Books' && <Books />}
        {route === 'About' && <About />}
      </main>
      <footer>Dor Hakim</footer>
    </React.Fragment>
  )
}
