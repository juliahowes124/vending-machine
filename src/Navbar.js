
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function NavBar(props) {
  return (
    <nav class={props.class}>
    <NavLink exact to="/">Home</NavLink><br/>
    <NavLink to="/cheetos">Cheetos</NavLink><br/>
    <NavLink to="/reeses">Reeses</NavLink><br/>
    <NavLink to="/kitkat">Kitkat</NavLink><br/>
    </nav>
  )
}

export default NavBar;