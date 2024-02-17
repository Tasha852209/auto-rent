import { Text, Wrapper, WrapperList } from './Favorite.styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import AdvertsList from 'components/AdvertsList/AdvertsList';

export default function Favorites() {
  const favoriteCars = useSelector(selectFavorites);
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);

  const loadMore = () => {
    const startIndex = page * 12;
    const nextCars = favoriteCars.favorites.slice(startIndex, startIndex + 12);
    setCars([...cars, ...nextCars]);
    setPage(page + 1);
  };

  useEffect(() => {
    const initialCars = favoriteCars.favorites.slice(0, 12);
    setCars(initialCars);
  }, [favoriteCars]);

  return (
    <>
      <Wrapper>
        <WrapperList>
          {cars.length ? (
            <AdvertsList list={cars} />
          ) : (
            <Text>Your favorites are currently empty...</Text>
          )}
          {favoriteCars.favorites.length > cars.length && (
            <button type="button" onClick={loadMore}>
              Load more
            </button>
          )}
        </WrapperList>
      </Wrapper>
    </>
  );
}
