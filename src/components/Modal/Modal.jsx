import { useEffect } from 'react';

import CloseIcon from 'images/icons/CloseIcon';

import './Modal.scss';

const Modal = ({ children, onCloseModal }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal__content">
        <button type="button" className="modal__close-btn">
          <CloseIcon
            onClick={() => {
              onCloseModal();
            }}
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
