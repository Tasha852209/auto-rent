import { NavLink } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';
import LogoIcon from 'images/icons/LogoIcon';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          <LogoIcon />
          AutoRent
        </NavLink>
        <Navigation />
        <ul className="addition-data__list">
          <li>
            <p className="addition-data__text">Schedule from 8:00 to 21:00</p>
          </li>
          <li>
            <a href="tel:+380730000000" className="addition-data__link">
              +380 50 000 00 00
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
