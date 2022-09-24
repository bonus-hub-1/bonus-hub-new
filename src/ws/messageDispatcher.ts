import {stores} from "../contexts";
const {WsStore, UserStore} = stores;

export const dispatchMessage = (res: any) => {
  const {action, payload} = res;

  switch (action) {
    case "init":
      WsStore.changeWsConnectionStatus("connected");
      UserStore.setUserInfo(payload);
      break;
    case "button_press":
      UserStore.updateUserTimer(payload);
      break;
    case "ref_joined":
      UserStore.updateReferralInfo(payload);
      break;

    default:
      break;
  }
};
