import logoImg from '../assets/logo.jpg'

const Header = () => {
  return (
    <header className="main-header">
      <div className="title">
        <img src={logoImg} alt="restaurant logo"/>
        <h1>Catchy Name Here</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  )
}

export default Header