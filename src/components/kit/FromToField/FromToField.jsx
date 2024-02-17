import { useState } from 'react';

import { toast } from 'react-toastify';

import { formatingCommasToNumber } from 'utils/formatingCommasToNumber';

import './FromToField.scss';

const FromToField = props => {
  const {
    id = 'text-input',
    label = 'label',
    value = { from: '', to: '' },
  } = props;

  const [fieldValue, setFieldValue] = useState(value);

  const onChange = e => {
    if (!/^[0-9,]+$/.test(e.target.value) && e.target.value.trim()) {
      toast.warn('Please write only numbers');
      return;
    }

    setFieldValue(prev => ({
      ...prev,
      [e.target.name]: formatingCommasToNumber(e.target.value),
    }));
  };

  return (
    <div className="input-fromto-field__group">
      <p>{label}</p>
      <div className="input-fromto__container">
        <div className="input-fromto__wrapper">
          <label htmlFor={`${id}_from`}>From</label>
          <input
            name={'from'}
            value={fieldValue.from}
            className="input__from"
            id={`${id}_from`}
            type="text"
            onChange={onChange}
            autoComplete="off"
          />
        </div>
        <div className="input-fromto__wrapper">
          <label htmlFor={`${id}_to`}>To</label>
          <input
            name={'to'}
            value={fieldValue.to}
            className="input__to"
            id={`${id}_to`}
            type="text"
            onChange={onChange}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default FromToField;
