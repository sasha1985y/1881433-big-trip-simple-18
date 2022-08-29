import dayjs from 'dayjs';
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


/* destinations */

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

const destinationsArr = createDestinationIdPlus();

/* offers */

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
  }

};

const createOffersByType = () => ({
  type: VEHICLE_TYPE[getRandomInteger(0, VEHICLE_TYPE.length - 1)],
  offers: chooseOffer()
});


const createOffersByTypeArr = () => {
  const localOffersByTypeArr = [];
  for (let i = 0; i < GLOBAL_INTEGER; i++) {
    const oneArr = createOffersByType();
    localOffersByTypeArr.push(oneArr);
  }
  return localOffersByTypeArr;
};
const offersByTypeArr = createOffersByTypeArr();

const getOffersArr = () => {
  const offersArr = [];

  offersByTypeArr.forEach((element) => {
    if(element.offers === undefined) {
      offersArr.push(undefined);
    } else {
      const elementId = element.offers.map((item) => item.id);
      offersArr.push(elementId);
    }
  });

  return offersArr;
};

const idOffersArray = getOffersArr();

/* points */

const generateTodayDate = () => {
  const localContainer = {};

  const days = dayjs().format('D');
  const months = dayjs().format('MM');
  const years = dayjs().format('YYYY');
  const hours = dayjs().format('HH');
  const minutes = dayjs().format('mm');
  const seconds = dayjs().format('ss');
  const milliseconds = getRandomInteger(0, 999);

  localContainer.today = `${years}-${months}-${days}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;

  let monthsFromBeginning = +months - getRandomInteger(0, 1);

  if(String(monthsFromBeginning).length === 1) {
    monthsFromBeginning = 0 + String(monthsFromBeginning);
  }

  let monthsToEnd = +months + getRandomInteger(0, 1);

  if(String(monthsToEnd).length === 1) {
    monthsToEnd = 0 + String(monthsToEnd);
  }

  let daysFromBeginning = +days - getRandomInteger(0, days - 1);

  if(String(daysFromBeginning).length === 1) {
    daysFromBeginning = 0 + String(daysFromBeginning);
  }

  let daysToEnd = +days + getRandomInteger(0, days - (days - 1));

  if(String(daysToEnd).length === 1) {
    daysToEnd = 0 + String(daysToEnd);
  }

  let hoursFromBeginning = +hours - getRandomInteger(0, hours - 1);

  if(String(hoursFromBeginning).length === 1) {
    hoursFromBeginning = 0 + String(hoursFromBeginning);
  }

  let hoursToEnd = +hours + getRandomInteger(0, hours - (hours - 1));

  if(String(hoursToEnd).length === 1) {
    hoursToEnd = 0 + String(hoursToEnd);
  }

  let minutesFromBeginning = +minutes - getRandomInteger(0, minutes - 1);

  if(String(minutesFromBeginning).length === 1) {
    minutesFromBeginning = 0 + String(minutesFromBeginning);
  }

  let minutesToEnd = +minutes + getRandomInteger(0, minutes - (minutes - 1));

  if(String(minutesToEnd).length === 1) {
    minutesToEnd = 0 + String(minutesToEnd);
  }

  const timefromBeginning = `${years}-${monthsFromBeginning}-${daysFromBeginning}T${hoursFromBeginning}:${minutesFromBeginning}:${seconds}.${milliseconds}Z`;
  const timeToEnd = `${years}-${monthsToEnd}-${daysToEnd}T${hoursToEnd}:${minutesToEnd}:${seconds}.${milliseconds}Z`;

  localContainer.beginning = timefromBeginning;
  localContainer.end = timeToEnd;

  return localContainer;
};

const createTimesArr = () => {
  const timesArr = [];
  for (let i = 0; i < GLOBAL_INTEGER; i++) {
    timesArr.push(generateTodayDate());
  }
  return timesArr;
};

const times = createTimesArr();

const createPoint = () => ({
  basePrice: getRandomInteger(100, 500),
  dateFrom: '2019-07-11T11:22:13.375Z',
  dateTo: '2019-07-23T11:15:13.375Z',
  destination: '$Destination.id$',
  id: 1,
  offers: 'offers',
  type: 'type'
});

const createPointIdPlus = () => {
  const setPoints = [];

  for (let i = 0; i < GLOBAL_INTEGER; i++) {
    const offerObject = offersByTypeArr[i];
    const idOfferArray = idOffersArray[i];
    const time = times[i];
    const nextPoint = createPoint();
    setPoints.push(nextPoint);
    nextPoint.dateFrom = time.beginning;
    nextPoint.dateTo = time.end;
    nextPoint.id += i;
    nextPoint.offers = idOfferArray;
    nextPoint.type = offerObject.type;
  }
  return setPoints;
};

const setPointsArr = createPointIdPlus();

export { destinationsArr, offersByTypeArr, setPointsArr, GLOBAL_INTEGER };
