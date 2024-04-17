import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'

const Header = () => {
  return (
    <header className="main-header">
      <div className="title">
        <img src={logoImg} alt="restaurant logo"/>
        <h1>Catchy Name Here</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  )
}

export default Header