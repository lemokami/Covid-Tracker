import { h } from 'preact';

const Card = ({ color, type, number }) => {
  return (
    <div>
      {color}-{type}-{{ ...number }.value}
    </div>
  );
};

export default Card;
