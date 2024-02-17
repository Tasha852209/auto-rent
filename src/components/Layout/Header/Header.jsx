import { NavLink } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';
import LogoIcon from '../../../images/LogoIcon';

import { StyledHeader } from './Header.styled';

export default function Header() {
  return (
    <StyledHeader className="header">
      <div className="container">
        <NavLink to="/" className="logo">
          <LogoIcon />
          AutoRent
        </NavLink>
        <Navigation />
        <ul className="addition-data__list">
          <li>
            <p className="addition-data__text">Schedule from 8:00 to 20:00</p>
          </li>
          <li>
            <a href="tel:+380500000000" className="addition-data__link">
              +380 50 000 00 00
            </a>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
}
