import CarCard from 'components/CarCard/CarCard';

import './AdvertsList.scss';

const AdvertsList = ({ list = [] }) => {
  return list.length ? (
    <ul className="adverts__list">
      {list.map(item => (
        <CarCard key={`${item.make}_${Math.random(1)}`} car={item} />
      ))}
    </ul>
  ) : (
    <p className="adverts__no-content">
      Sorry, there are no cars with this request in stock...
    </p>
  );
};

export default AdvertsList;
