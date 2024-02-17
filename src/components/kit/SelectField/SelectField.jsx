import { useEffect, useState } from 'react';

import ChevronDownIcon from 'images/icons/ChevronDownIcon';

import './SelectField.scss';

const SelectField = props => {
  const { name, id, label, placeholder = 'Enter the text', optionList } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen]);

  return (
    <div className="dropdown__cotainer">
      <p className="dropdown__label">{label}</p>
      <div className="dropdown__select">
        <div
          className={`dropdown__header ${isOpen ? 'dropdown__open' : ''}`}
          onClick={toggling}
        >
          <input
            type="text"
            id={id}
            name={name}
            value={selectedOption || placeholder}
            readOnly={true}
            className="dropdown__select--input"
          />
          <ChevronDownIcon />
        </div>
        {isOpen && (
          <div className="dropdown__list-container">
            <ul className="dropdown__list">
              {optionList.map(option => (
                <li
                  name={name}
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                  className="dropdown__item"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectField;
