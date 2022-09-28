/*import { render } from '../framework/render';
import HeaderFilterButtonEverything from '../view/filter-everything-view.js';
import HeaderFilterButtonFuture from '../view/filter-future-view';

export default class FilterPresenter {

  #appHeaderElement = null;
  #filterEverythingComponent = null;
  #filterFutureComponent = null;

  constructor ( filterEverythingComponent, filterFutureComponent ) {
    this.#filterEverythingComponent = filterEverythingComponent;
    this.#filterFutureComponent = filterFutureComponent;
  }

  init (appHeaderElement) {
    this.#appHeaderElement = appHeaderElement;
    this.#filterEverythingComponent = new HeaderFilterButtonEverything();
    this.#filterFutureComponent = new HeaderFilterButtonFuture();

    this.#filterEverythingComponent.setClickEverythingHandler(this.#setClickEverythingHandler);
    this.#filterFutureComponent.setClickFutureHandler(this.#setClickFutureHandler);

    render(this.#filterFutureComponent, this.#filterEverythingComponent.element);
    render(this.#filterEverythingComponent, this.#appHeaderElement);
  }

  #FilterType = {
    EVERYTHING: 'everything',
    FUTURE: 'future'
  };

  #generateFilter = (tasks) => Object.entries(filter).map(
    ([filterName, filterTasks]) => ({
      name: filterName,
      count: filterTasks(tasks).length,
    }),
  );

  //const filter = {
  //[FilterType.EVERYTHING]: (tasks) => tasks.filter((task) => !task.isArchive),
  //[FilterType.FUTURE]:
  //}

  #everything = () => {
    console.log('Everything');
  };

  #future = () => {
    //if (point.dateFrom === isEventExpired || isEventExpiringToday) {

    //}
    console.log('Future');
  };

  #setClickEverythingHandler = () => {
    this.#everything();
  };

  #setClickFutureHandler = () => {
    this.#future();
  };
}*/
