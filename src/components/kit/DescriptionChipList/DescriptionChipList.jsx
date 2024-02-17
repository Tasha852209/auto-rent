import './DescriptionChipList.scss';

const DescriptionChipList = ({ list }) => {
  return (
    <ul className="chip__list">
      {list.map(item => {
        let [name, number] = item.split(': ');
        if (typeof number === 'string') {
          const newNumber = number.replace(/(\$)(\d+)/, '$2$1');
          number = newNumber;
        }

        return (
          <li className="chip__item" key={name}>
            {!number ? name : `${name}: `}
            {number && <span>{number}</span>}
          </li>
        );
      })}
    </ul>
  );
};

export default DescriptionChipList;
