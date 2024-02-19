import { Header, Link, Nav } from './Navigation.styled';

export default function Navigation() {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </Nav>
      </Header>
    </>
  );
}
