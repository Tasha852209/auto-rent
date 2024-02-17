import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import './Catalog.scss';
import { selectAdvertsFilter } from '../../redux/filters/filtersSelectors';
import { useGetAdvertsQuery } from '../../redux/adverts/advertsSlice';
import { getFilteredAdverts } from 'utils/getFilteredAdverts';
import { createArrayWithStep } from 'utils/createArrayWithStep';
import Section from 'components/kit/Section/Section';
import Loader from 'components/kit/Loader/Loader';
import Filter from 'components/Filter/Filter';
import AdvertsList from 'components/AdvertsList/AdvertsList';

const Catalog = () => {
  const filter = useSelector(selectAdvertsFilter);
  const { data: adverts, isLoading } = useGetAdvertsQuery();

  const [currentPage, setCurrentPage] = useState(1);

  let dataFilters = {
    brands: [],
    prices: [],
  };
  let visibleAdverts = useMemo(() => {}, []);

  const limitAdverts = 12;
  let totalAdverts = 0;
  let totalPages = 0;

  if (!isLoading) {
    visibleAdverts = getFilteredAdverts(adverts, filter);
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

    totalAdverts = visibleAdverts.length;
    totalPages = !totalAdverts ? 1 : Math.ceil(totalAdverts / limitAdverts);
  }

  const currentAdvertsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * limitAdverts;
    const lastPageIndex = firstPageIndex + limitAdverts;

    return visibleAdverts?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, visibleAdverts]);

  const handleClickLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Section>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Filter filtersList={dataFilters} />
          <AdvertsList list={currentAdvertsData} />
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
