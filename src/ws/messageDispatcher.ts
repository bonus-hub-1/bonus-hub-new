import {stores} from "../contexts";
import {nativeAds} from "../utils/bridge-method";
const {WsStore, UserStore, SnackbarStore} = stores;

export const dispatchMessage = (res: any) => {
  const {action, payload} = res;

  // console.log("res", res);

  if (res.error) {
    SnackbarStore.setShowSnackbar("payload.text", "danger");
  }

  switch (action) {
    case "init":
      WsStore.changeWsConnectionStatus("connected");
      UserStore.setUserInfo(payload);
      break;
    case "error":
      // SnackbarStore.setShowSnackbar(payload.text, "danger");
      break;
    case "button_press":
      UserStore.updateUserTimer(payload);
      break;
    case "referral_joined":
      UserStore.updateReferralInfo(payload);
      break;
    case "sub_group":
      UserStore.updateAds(payload);
      break;
    case "ads":
      UserStore.updateAds(payload);

      if (payload.ads === true) {
        nativeAds();
      } else {
        SnackbarStore.setShowSnackbar(
          `Ожидайте ${payload.wait} сек, для следущего просмотра`,
          "danger"
        );
      }

      break;
    default:
      break;
  }
};
