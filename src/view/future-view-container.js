import AbstractView from '../framework/view/abstract-view';

const createFutureViewContainerTemplate = () => '<ul class="trip-events__list"></ul>';

export default class FutureViewContainer extends AbstractView {
  get template() {
    return createFutureViewContainerTemplate();
  }
}
