import React, {useState, useEffect} from "react";

import "./ws/connection.ts";

import "antd/dist/antd.css";
import "./index.scss";

import "@vkontakte/vkui/dist/vkui.css";

import {RootModal} from "./components/Modals/RootModal";
import {Router, Redirect} from "@reach/router";
import {routeUrl} from "./utils/constants";
import {Dashboard} from "./pages/Dashboard";
import {observer} from "mobx-react-lite";
import {useStores} from "./hooks/useStores";
import {useGetUserInfo} from "./utils/hooks";
import {toJS} from "mobx";
import {CustomSnackbar} from "./components/Snackbar";
import {SharingMenu} from "./components/common/SharingMenu";

const App: React.FC = observer(() => {
  const {UserStore, SnackbarStore, ModalStore, SharingMenuStore} = useStores();

  const userInfo = useGetUserInfo();

  console.log("UserStore", toJS(UserStore));

  useEffect(() => {
    // SnackbarStore.setShowSnackbar("test test 123", "danger");
    // ModalStore.setActiveModal("sharing");
    // setTimeout(() => {
    //   SharingMenuStore.resetStore();
    // }, 3000);
  }, []);

  return (
    <>
      <Router basepath={routeUrl === "" ? "/" : routeUrl}>
        <Dashboard path="dashboard" />
        <Redirect from="/" to={`${routeUrl}/dashboard`} noThrow />
      </Router>
      {/* <Footer /> */}
      <RootModal />
      <CustomSnackbar />
    </>
  );
});

export default App;
