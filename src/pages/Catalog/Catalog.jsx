import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import './Catalog.scss';
import { selectAdvertsFilter } from '../../redux/filters/filtersSelectors';
import {
  useGetAdvertsQuery,
  useGetCarsByPageQuery,
} from '../../redux/adverts/advertsSlice';
import { getFilteredAdverts } from 'utils/getFilteredAdverts';
import { createArrayWithStep } from 'utils/createArrayWithStep';
import Section from 'components/kit/Section/Section';
import Loader from 'components/kit/Loader/Loader';
import Filter from 'components/Filter/Filter';
import AdvertsList from 'components/AdvertsList/AdvertsList';

const Catalog = () => {
  const filter = useSelector(selectAdvertsFilter);

  const { data: adverts } = useGetAdvertsQuery();
  const [allCars, setAllCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetCarsByPageQuery(currentPage);

  let dataFilters = {
    brands: [],
    prices: [],
  };

  const limitAdverts = 12;
  let totalAdverts = 0;
  let totalPages = 0;

  if (!isLoading && adverts) {
    dataFilters = {
      brands: ['All', ...new Set(adverts.map(({ make }) => make))],
      prices: createArrayWithStep(
        0,
        Math.max(
          ...new Set(
            adverts.map(({ rentalPrice }) => rentalPrice.replace(/(\$)/, ''))
          )
        ),
        10
      ),
    };

    totalAdverts = adverts.length;
    totalPages = !totalAdverts ? 1 : Math.ceil(totalAdverts / limitAdverts);
  }

  useEffect(() => {
    if (data) {
      setAllCars(prevCatalog => [...prevCatalog, ...data]);
    }
  }, [data]);

  const filteredAdverts = useMemo(() => {
    return getFilteredAdverts(allCars, filter);
  }, [allCars, filter]);

  const handleClickLoadMore = () => {
    setCurrentPage(prev => prev + 1);
    // window.scrollTo(0, 0);
  };

  return (
    <Section>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Filter filtersList={dataFilters} />
          <AdvertsList list={filteredAdverts} />
          <div className="buttons__wrapper">
            {totalPages > currentPage && (
              <button
                type="button"
                className="load-more__btn"
                onClick={handleClickLoadMore}
              >
                Load more
              </button>
            )}
          </div>
        </>
      )}
    </Section>
  );
};

export default Catalog;
