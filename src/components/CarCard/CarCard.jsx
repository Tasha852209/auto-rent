import { useState } from 'react';

import { toast } from 'react-toastify';

import HeartIcon from 'images/icons/HeartIcon';

import './CarCard.scss';
import DescriptionList from 'components/kit/DescriptionList/DescriptionList';
import Modal from 'components/Modal/Modal';
import CarModalCard from 'components/CarModalCard/CarModalCard';
import { useUpdateFavoriteAdvertByIdMutation } from '../../redux/adverts/advertsSlice';
import { useDisableBodyScroll } from 'hook/useDisableBodyScroll';
import { getCarDescList } from 'utils/getCarDescriptionList';

const CarCard = ({ car }) => {
  const { id, img, make, model, year, rentalPrice, favorite } = car;

  const [isShowModal, setIsShowModal] = useState(false);

  const [updateFavoriteAdvertById] = useUpdateFavoriteAdvertByIdMutation();
  useDisableBodyScroll(isShowModal);

  const descriptionList = getCarDescList(car);

  const handleToggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  const handleToggleFavorite = async id => {
    try {
      updateFavoriteAdvertById({ id, favorite: !favorite });
    } catch (error) {
      toast.warn('Sorry something wrong');
    }
  };

  return (
    <li>
      <div className="card">
        <div className="card__wrapper">
          <div className="card__thumb-img">
            <img src={img} alt={make} loading="lazy" />
            <button type="button" onClick={() => handleToggleFavorite(id)}>
              <HeartIcon className={favorite ? 'favorited' : ''} />
            </button>
          </div>
          <div className="card__thumb-title">
            <h3>
              {`${make} `}
              <span>{model}</span>
              {`, ${year}`}
            </h3>
            <p>{rentalPrice}</p>
          </div>
          <DescriptionList list={descriptionList} size="small" />
        </div>

        <button type="button" className="card__btn" onClick={handleToggleModal}>
          Learn more
        </button>
      </div>
      {isShowModal && (
        <Modal onCloseModal={handleToggleModal}>
          <CarModalCard car={car} />
        </Modal>
      )}
    </li>
  );
};

export default CarCard;
