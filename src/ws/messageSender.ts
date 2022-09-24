// import { stores } from "../contexts";

export const wsButtonPress = () => {
  global.wsSend("button_press", "button_press");
};
