import { NavLink } from 'react-router-dom';
import { useGetAdvertsQuery } from '../../redux/adverts/advertsSlice';

import AdvertsList from 'components/AdvertsList/AdvertsList';

import './CarsInStock.scss';

const CarsInStock = () => {
  const { data: adverts, isLoading } = useGetAdvertsQuery();
  let notAllAdverts = [];

  if (!isLoading) {
    const n = adverts?.length >= 12 ? 12 : 4;
    notAllAdverts = adverts?.slice(0, n);
  }

  return (
    <div className="in-stock__container">
      {!isLoading && <AdvertsList list={notAllAdverts} />}
      <NavLink className="in-stock__btn" to="/catalog">
        More adverts
      </NavLink>
    </div>
  );
};

export default CarsInStock;
