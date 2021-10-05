import { NavLink } from 'react-router-dom';
import { NavContainer } from './Navigation.styled';


const Navigation = () => {
    return (
    <NavContainer>
        <NavLink exact to="/" className="link" activeClassName="activeLink">
            Home
        </NavLink>
        <NavLink to="/movies" className="link" activeClassName="activeLink">
            Movies
        </NavLink>      

    </NavContainer>
);
}
export default Navigation;