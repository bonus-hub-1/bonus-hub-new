import {stores} from "../contexts";
const {WsStore, UserStore} = stores;

export const dispatchMessage = (res: any) => {
  const {action, payload} = res;

  console.log("action", action);
  console.log("payload", payload);

  switch (action) {
    case "init":
      WsStore.changeWsConnectionStatus("connected");
      UserStore.setUserInfo(payload);
      break;
    case "button_press":
      UserStore.setUserInfo(payload);
      break;
    case "ref_joined":
      UserStore.setUserInfo(payload);
      break;

    default:
      break;
  }
};
