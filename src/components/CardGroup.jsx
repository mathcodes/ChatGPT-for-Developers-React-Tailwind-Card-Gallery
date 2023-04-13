import React from 'react';
import PropTypes from 'prop-types';

const data = [
  {
    title: 'Card 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/300x200',
    color: 'from-indigo-600 to-blue-500',
  },
  {
    title: 'Card 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://via.placeholder.com/300x200',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Card 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://via.placeholder.com/300x200',
    color: 'from-green-500 to-blue-500',
  },
  {
    title: 'Card 4',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://via.placeholder.com/300x200',
    color: 'from-red-500 to-yellow-500',
  },
  {
    title: 'Card 5',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://via.placeholder.com/300x200',
    color: 'from-teal-500 to-indigo-500',
  },
  {
    title: 'Card 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://via.placeholder.com/300x200',
    color: 'from-blue-500 to-purple-500',
  },
];

const Card = ({ title, description, image, color }) => {
  return (
    <div className={`bg-gradient-to-r ${color} p-8 rounded-lg shadow-lg md:w-1/2 lg:w-1/3`}>
      <div className="h-40 md:h-48 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const CardGroup = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
};

export default CardGroup;
