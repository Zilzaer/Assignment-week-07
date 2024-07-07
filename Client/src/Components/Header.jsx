
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'


const Header = () => {
  return (
    <header className="header">
        <div className='logo'>
            <img src={logo} alt="image of a d20 dice with the letters LFG" />
        </div>
      <div className='title'>Looking for Group</div>
      <nav>
        <ul>
          <button><li><Link to="/">Home</Link></li></button>
          <button><li><Link to="/Posts">User Posts</Link></li></button>
          <button><li><Link to="/MakePosts">Make a Post!</Link></li></button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;