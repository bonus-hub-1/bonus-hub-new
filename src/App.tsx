import React, {useEffect} from "react";

import "./ws/connection.ts";

import "antd/dist/antd.css";
import "./index.scss";

import "@vkontakte/vkui/dist/vkui.css";

import {RootModal} from "./components/Modals/RootModal";
import {Router, Redirect} from "@reach/router";
import {GROUP_ID, routeUrl, USER_ID} from "./utils/constants";
import {Dashboard} from "./pages/Dashboard";
import {observer} from "mobx-react-lite";
import {useStores} from "./hooks/useStores";
import {useGetUserInfo} from "./utils/hooks";
import {toJS} from "mobx";
import {CustomSnackbar} from "./components/Snackbar";
import {addGroup} from "./utils/bridge-method";

const App: React.FC = observer(() => {
  const {UserStore, SnackbarStore, ModalStore, SharingMenuStore} = useStores();

  const userInfo = useGetUserInfo();

  useEffect(() => {
    setTimeout(() => {
      addGroup(GROUP_ID);
    }, 5_000);
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
