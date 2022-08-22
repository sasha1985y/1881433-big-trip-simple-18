import { createElement } from '../render.js';
import { generateDate } from '../mock/utils.js';

const createTripPointTemplate = (destination, offerType, dueDate) => {
  const { name } = destination;
  const { type, offers } = offerType;
  for (let i = 0; i < offers.length; i++) {
    const offer = offers[i];
    const {title , price} = offer;
    const date = generateDate(dueDate);
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
      €&nbsp;<span class="event__price-value">20</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">${title}</span>
        +€&nbsp;
        <span class="event__offer-price">${price}</span>
      </li>
    </ul>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
      </button>
      </div>
      </li>`
    );
  }
};


export default class TripPoint {

  constructor(destination, offerType) {
    this.destination = destination;
    this.offerType = offerType;
  }

  getTemplate() {
    return createTripPointTemplate(this.destination, this.offerType);
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
