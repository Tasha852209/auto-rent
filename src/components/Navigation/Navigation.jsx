import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => {
  return (
    <>
      <header className="blend nav">
        <nav className="nav_list">
          <NavLink className="nav_link" to="/">
            Home
          </NavLink>

          <NavLink className="nav_link" to="/catalog">
            Catalog
          </NavLink>
          <NavLink className="nav_link" to="/favorites">
            Favorites
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
