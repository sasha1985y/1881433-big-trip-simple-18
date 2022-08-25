import dayjs from 'dayjs';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const humanizeTaskDueDateTo = (date_to) => dayjs(date_to).format('D MMMM');
const detalizedTaskDueDateFrom = (date_from) => dayjs(date_from).format('D/MM/YY HH:mm');
const detalizedTaskDueDateTo = (date_to) => dayjs(date_to).format('D/MM/YY HH:mm');

const generateDate = () => {
  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  return dayjs().add(daysGap, 'day').toDate();
};

export { getRandomInteger, humanizeTaskDueDateTo, generateDate, detalizedTaskDueDateTo, detalizedTaskDueDateFrom };
