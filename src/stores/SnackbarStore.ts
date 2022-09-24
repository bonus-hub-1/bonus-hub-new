import {observable, action, makeObservable} from "mobx";

const DANGER_COLOR = "#bb0000";
const SUCCESS_COLOR = "#00a148";
const WARNING_COLOR = "#f7d73d";
// import API from "../api";

export class SnackbarStore {
  showSnackbar = false;
  snackbarText = "Test snackbar";
  snackbarColor = "";
  snackbarType = "";

  setShowSnackbar = (text: string, type: "success" | "danger" | "warn") => {
    this.showSnackbar = true;
    this.snackbarText = text;
    this.snackbarType = type;
    switch (true) {
      case type === "success":
        this.snackbarColor = SUCCESS_COLOR;
        break;
      case type === "danger":
        this.snackbarColor = DANGER_COLOR;
        break;
      case type === "warn":
        this.snackbarColor = WARNING_COLOR;
        break;
      default:
        this.snackbarColor = SUCCESS_COLOR;
        break;
    }
  };

  resetStore = () => {
    this.showSnackbar = false;
    this.snackbarText = "";
    this.snackbarColor = "";
    this.snackbarType = "";
  };

  constructor() {
    makeObservable(this, {
      showSnackbar: observable,
      snackbarText: observable,
      snackbarColor: observable,
      snackbarType: observable,
      setShowSnackbar: action,
      resetStore: action,
    });
  }
}
