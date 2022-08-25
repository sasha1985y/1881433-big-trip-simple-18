import { createElement } from '../render.js';
import { humanizeTaskDueDateTo} from '../mock/utils.js';

const destructionTitlePrice = (offers) => {
  const listTitlePrice = [];
  const offersTitle = offers.map((offer) => offer.title);
  const offersPrice = offers.map((offer) => offer.price);
  for (let i = 0; i < offersTitle.length; i++) {
    const offerTitle = offersTitle[i];
    for (let j = 0; j < offersPrice.length; j++) {
      const offerPrice = offersPrice[j];
      let li = (
        `<li class="event__offer">
        <span class="event__offer-title">${offerTitle}</span>
        +€&nbsp;
        <span class="event__offer-price">${offerPrice}</span>
        </li>`);
      if (!offerTitle) {
        li = (`<li class="event__offer">
          <span class="event__offer-title">No additional offers</span>
          </li>`);
      }

      listTitlePrice.push(li);
    }
    return listTitlePrice.join('');
  }
};

const createTripPointTemplate = (destination, offerType, point) => {
  const { name } = destination;
  const { type, offers } = offerType;
  const {base_price, date_to} = point;
  const titlePrice = destructionTitlePrice(offers);
  const date = humanizeTaskDueDateTo(date_to);
  return (`<li class="trip-events__item">
<div class="event">
  <time class="event__date" datetime="2019-03-18">${date}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${type} ${name}</h3>
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
      —
      <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
    </p>
  </div>
  <p class="event__price">
    €&nbsp;<span class="event__price-value">${base_price}</span>
  </p>
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
    ${titlePrice}
  </ul>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
    </button>
    </div>
    </li>`
  );
};


export default class TripPoint {

  constructor(destination, offerType, point) {
    this.destination = destination;
    this.offerType = offerType;
    this.point = point;
  }

  getTemplate() {
    return createTripPointTemplate(this.destination, this.offerType, this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
