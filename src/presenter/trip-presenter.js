import { render } from '../render';
// import { TripPointCreateView } from '../view/trip-point-create-view';
import { TripPointEditView } from '../view/trip-point-edit-view.js';
import { TripPointFilterView } from '../view/trip-point-filter-view.js';
import { TripPointListView } from '../view/trip-point-list-view.js';
import { TripPointSortView } from '../view/trip-point-sort-view.js';
import { TripPointView } from '../view/trip-point-view.js';


export class TripPresenter {
  tripPointListView = new TripPointListView();
  POINTS_COUNT = 3;

  constructor ({filterContainer, siteMainContainer}) {
    this.filterContainer = filterContainer;
    this.siteMainContainer = siteMainContainer;
  }

  init() {
    render(new TripPointFilterView(), this.filterContainer);
    render(new TripPointSortView(), this.siteMainContainer);
    render(this.tripPointListView, this.siteMainContainer);
    render(new TripPointEditView(), this.tripPointListView.getElement());

    for (let i = 0; i < this.POINTS_COUNT; i ++) {
      render(new TripPointView(), this.tripPointListView.getElement());
    }
  }
}
