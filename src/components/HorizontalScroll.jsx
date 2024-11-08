import React from 'react';
import Card from './Card';

const HorizontalScroll = ({ cards }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex border-color: rgb(249 168 212) p-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;