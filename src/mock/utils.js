import dayjs from 'dayjs';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const humanizedDateTo = (dateTo) => dayjs(dateTo).format('D MMMM');

const detalizedDateFrom = (dateFrom) => dayjs(dateFrom).format('D/MM/YY HH:mm');
const detalizedDateTo = (dateTo) => dayjs(dateTo).format('D/MM/YY HH:mm');

const detalizedHoursMinutesTo = (dateTo) => dayjs(dateTo).format('HH:mm');
const detalizedHoursMinutesFrom = (dateFrom) => dayjs(dateFrom).format('HH:mm');


export { getRandomInteger, humanizedDateTo, detalizedDateTo, detalizedDateFrom, detalizedHoursMinutesTo, detalizedHoursMinutesFrom };
