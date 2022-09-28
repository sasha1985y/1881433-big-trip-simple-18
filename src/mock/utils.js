import dayjs from 'dayjs';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const humanizedDateFrom = (dateFrom) => dayjs(dateFrom).format('D MMMM');

const detalizedDateFrom = (dateFrom) => dayjs(dateFrom).format('D/MM/YY HH:mm');
const detalizedDateTo = (dateTo) => dayjs(dateTo).format('D/MM/YY HH:mm');

const detalizedHoursMinutesTo = (dateTo) => dayjs(dateTo).format('HH:mm');
const detalizedHoursMinutesFrom = (dateFrom) => dayjs(dateFrom).format('HH:mm');

const isEventExpired = (dateFrom) => dateFrom && dayjs().isAfter(dateFrom, 'D');
const isEventExpiringToday = (dateFrom) => dateFrom && dayjs(dateFrom).isSame(dayjs(), 'D');


export { getRandomInteger, humanizedDateFrom, detalizedDateTo, detalizedDateFrom, detalizedHoursMinutesTo, detalizedHoursMinutesFrom, isEventExpired, isEventExpiringToday };
