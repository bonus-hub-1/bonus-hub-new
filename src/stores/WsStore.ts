import {observable, action, makeObservable} from "mobx";

type WsStatusType = "connecting" | "connected" | "disconnected";

export class WsStore {
  wsStatus = "disconnected";
  wsUrl = "";

  changeWsConnectionStatus = (status: WsStatusType) => {
    this.wsStatus = status;
  };

  resetStore = () => {
    this.wsStatus = "disconnected";
  };

  constructor() {
    makeObservable(this, {
      resetStore: action,
      changeWsConnectionStatus: action,
      wsStatus: observable,
    });
  }
}
