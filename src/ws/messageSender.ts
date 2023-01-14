// import { stores } from "../contexts";

export const wsButtonPress = () => {
  global.wsSend("button_press", "");
};

export const wsAds = async () => {
  await global.wsSend("ads", "");
};

export const wsSubGroup = async () => {
  await global.wsSend("sub_group", "");
};
