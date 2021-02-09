import { h } from 'preact';

const Counter = ({ maxNum }) => {
  return (
    <div className='card__count card--bold'>
      {maxNum}
      <span className='card__subcount card--bold'> cases</span>{' '}
    </div>
  );
};

export default Counter;
