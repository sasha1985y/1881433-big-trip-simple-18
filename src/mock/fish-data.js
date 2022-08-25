import { getRandomInteger } from './utils.js';

const GLOBAL_INTEGER = 3;

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
  id: 1,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  name: PLACES[getRandomInteger(0, PLACES.length - 1)],
  pictures: [
    {
      src: 'http://picsum.photos/300/200?r=0.0762563005163317',
      description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)]
    }
  ]
});

const createDestinationIdPlus = () => {
  const setDestinations = [];
  for (let i = 0; i < GLOBAL_INTEGER; i++) {
    const nextDestination = createDestination();
    setDestinations.push(nextDestination);
    nextDestination.id += i;
  }
  return setDestinations;
};


const createOffer = () => ({
  id: 1,
  title: 'offer title',
  price: getRandomInteger(100, 250)
});

const chooseOffer = () => {

  const setOffers = [];
  const randomOffersInt = getRandomInteger(0, GLOBAL_INTEGER);

  for (let i = 0; i < GLOBAL_INTEGER - randomOffersInt; i++) {
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

const createPoint = () => ({
  base_price: getRandomInteger(100, 500),
  date_from: '2019-07-10T22:55:56.845Z',
  date_to: '2019-07-11T11:22:13.375Z',
  destination: '$Destination.id$',
  id: 1,
  offers: '$Array < Offer.id > $',
  type: 'bus'
});

const createPointIdPlus = () => {
  const setPoints = [];
  for (let i = 0; i < GLOBAL_INTEGER; i++) {
    const nextPoint = createPoint();
    setPoints.push(nextPoint);
    nextPoint.id += i;
  }
  return setPoints;
};

export { createDestinationIdPlus, createOffersByType, createPointIdPlus, GLOBAL_INTEGER };
