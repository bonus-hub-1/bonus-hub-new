import {stores} from "../contexts";
import {vkValidationParamsString} from "../utils/constants";
import {dispatchMessage} from "./messageDispatcher";
const {WsStore, UserStore} = stores;

const wsReadyState: {[key: number]: string} = {
  0: "Сокет создан. Связь еще не открыта.",
  1: "Соединение открыто и готово к общению.",
  2: "Соединение закрывается.",
  3: "Соединение закрыто или не может быть открыто.",
};

// =================
// URL for WebSocket
// =================

const refHash = document.location.hash.replace("#", "");

const wsDevURL = `wss://bonushub.myatnenko.ru/ws/v1/connect/${vkValidationParamsString}&referral_id=${refHash}`;
const wsProductionURL = `wss://bonushub.myatnenko.ru/ws/v1/connect/${vkValidationParamsString}&referral_id=${refHash}`;
console.log("wsDevURL", wsDevURL);

const wsURL =
  process.env.NODE_ENV === "development" ? wsDevURL : wsProductionURL;

// =================
// Work with WebSocket
// =================

const wsStart = (wsUrl: string) => {
  WsStore.changeWsConnectionStatus("connecting");

  // const token = await UserStore.token;

  const ws = new WebSocket(wsUrl);

  // Connected
  ws.onopen = (e: any) => {
    WsStore.changeWsConnectionStatus("connected");
    console.log(
      `%c Websocket opened ${e.target.url} `,
      "background-color:#8de9e5; color: green;padding: 5px; border-radius:5px"
    );
  };

  // Show errors
  ws.onerror = (e: any) => {
    console.log(
      `%c Websocket error ${wsReadyState[e.currentTarget.readyState]}  `,
      "background-color:red; color: white;padding: 5px; border-radius:5px"
    );
    console.log(e);
  };

  // Reconnecting
  ws.onclose = (e: any) => {
    WsStore.changeWsConnectionStatus("disconnected");
    console.log(
      `%c Websocket disconnected ${e.reason} `,
      "background-color:#e1cb2f; color: white;padding: 5px; border-radius:5px"
    );

    if (e.reason === "Other Connection") return;

    setTimeout(() => {
      wsStart(wsURL);
    }, 3000);
  };

  // WebSocket send message
  global.wsSend = async (action: string, payload: any): Promise<void> => {
    if (ws.readyState === 1) {
      ws.send(
        JSON.stringify({
          action,
          payload,
        })
      );

      console.log(
        `%c Websocket send message ${payload} `,
        "background-color:#1bb5ff; color: white;padding: 5px; border-radius:5px"
      );
    }

    // return true;
  };

  // WebSocket received message
  ws.onmessage = (e: any) => {
    const res = JSON.parse(e.data);
    console.log(
      `%c Websocket received message ${res.action} `,
      "background-color:#1bb5ff; color: white;padding: 5px; border-radius:5px"
    );

    dispatchMessage(res);
  };
};

wsStart(wsURL);
