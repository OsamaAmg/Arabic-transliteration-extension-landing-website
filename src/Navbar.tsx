import './Navbar.css'
import logo from './assets/Extension-logo.png';


function Navbar() {
  return (
    <>
      <nav>
        <div className='logo'><img src={logo} alt="" /></div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#how-to">How-To</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className='try-extension'>Try Extension</button>
      </nav>
    </>
  );
}

export default Navbar;
