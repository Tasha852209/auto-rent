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

// import { NavLink } from 'react-router-dom';

// import './Navigation.scss';

// const Navigation = () => {
//   return (
//     <>
//       <header className="blend nav">
//         <nav className="nav_list">
//           <NavLink className="nav_link" to="/">
//             Home
//           </NavLink>

//           <NavLink className="nav_link" to="/catalog">
//             Catalog
//           </NavLink>
//           <NavLink className="nav_link" to="/favorites">
//             Favorites
//           </NavLink>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navigation;

// import Hero from 'components/Hero/Hero';
// import Section from 'components/kit/Section/Section';

// const Home = () => {
//   return (
//     <>
//       <Section>
//         <Hero />
//       </Section>
//     </>
//   );
// };

// export default Home;
