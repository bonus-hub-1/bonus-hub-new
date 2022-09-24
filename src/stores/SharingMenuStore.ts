import {observable, action, makeObservable} from "mobx";

export class SharingMenuStore {
  show = false;

  showSharingMenu = () => {
    this.show = true;
  };

  resetStore = () => {
    this.show = false;
  };

  constructor() {
    makeObservable(this, {
      show: observable,
      showSharingMenu: action,
      resetStore: action,
    });
  }
}
