const { NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header>
      <div className='logo'>
        <img src='imgs/woman-reading-a-book-svgrepo-com.svg' alt='' />
        <h1>Miss Books</h1>
      </div>

      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/book'>Books</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </header>
  )
}
