import './DescriptionList.scss';

const DescriptionList = ({ list = [], size = 'large' }) => {
  return (
    <ul className={`description__list ${size}`}>
      {list.map(item => (
        <li key={`${item}_${Math.random(1)}`}>{item}</li>
      ))}
    </ul>
  );
};

export default DescriptionList;
