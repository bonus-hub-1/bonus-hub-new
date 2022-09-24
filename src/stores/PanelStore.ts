import {observable, action, makeObservable} from "mobx";
import {routeUrl} from "../utils/constants";
import {navigate} from "@reach/router";

export class PanelStore {
  loading = false;
  activePanel = "dashboard";
  activeTab = "dashboard";

  setActivePanel = (value: string, idPage: string = "") => {
    this.activePanel = value;
    const startPath = idPage ? `${value}/` : value;
    navigate(`${routeUrl}${startPath}${idPage}`);
  };

  setActiveTab = (value: string) => {
    this.activeTab = value;
    navigate(`${routeUrl}/${value}`);
  };

  resetStore = () => {
    this.activePanel = "dashboard";
    this.activeTab = "dashboard";
    this.loading = false;
  };

  constructor() {
    makeObservable(this, {
      loading: observable,
      activePanel: observable,
      activeTab: observable,
      setActivePanel: action,
      setActiveTab: action,
      resetStore: action,
    });
  }
}
