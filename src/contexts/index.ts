import React from "react";
import {
  UserStore,
  ModalStore,
  SnackbarStore,
  PanelStore,
  WsStore,
  SharingMenuStore,
} from "../stores";

export const stores = {
  UserStore: new UserStore(),
  ModalStore: new ModalStore(),
  SnackbarStore: new SnackbarStore(),
  PanelStore: new PanelStore(),
  WsStore: new WsStore(),
  SharingMenuStore: new SharingMenuStore(),
};

export const storesContext = React.createContext(stores);
