import { getRandomInteger } from './utils.js';

const DESCRIPTIONS = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const PLACES = ['Dubay',
  'Tirane',
  'Chaco',
  'Vienna',
  'Lankaran',
  'Flanders',
  'Moscow',
  'Paris',
  'New-York'
];

const VEHICLE_TYPE = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const createDestination = () => ({
  id: getRandomInteger(1, 25),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  name: PLACES[getRandomInteger(0, PLACES.length - 1)],
  pictures: [
    {
      src: 'http://picsum.photos/300/200?r=0.0762563005163317',
      description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)]
    }
  ]
});

const createOffer = () => ({
  id: 1,
  title: 'offer title',
  price: getRandomInteger(1000, 5000)
});

const chooseOffer = () => {

  const setOffers = [];
  const randomOffersInt = getRandomInteger(0, 5);

  for (let i = 0; i < 5 - randomOffersInt; i++) {
    const nextOffer = createOffer();
    setOffers.push(nextOffer);
    nextOffer.id += i;
  }

  if(setOffers.length > 0) {
    return setOffers;
  } return ['No additional offers'];
};

const createOffersByType = () => ({
  type: VEHICLE_TYPE[getRandomInteger(0, VEHICLE_TYPE.length - 1)],
  offers: chooseOffer()
});

export { createDestination, createOffersByType };
