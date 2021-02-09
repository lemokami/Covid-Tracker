import { h } from 'preact';
import Counter from './Counter';

const Card = ({ color, type, number }) => {
  return (
    <div className={`card card--${color}`}>
      <h3 className='card__title '>{type}</h3>
      <Counter maxNum={{ ...number }.value} />
    </div>
  );
};

export default Card;
