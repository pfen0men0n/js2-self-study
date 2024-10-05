import { createElement } from '../render';

function createTripPointListTemplate () {
  return `<ul class="trip-events__list">
          </ul>`;
}

export class TripPointListView {
  getTemplate() {
    return createTripPointListTemplate();
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
