import React from "react";
import "./Dashboard.scss";
import {useUpToScroll} from "../../utils/hooks";
import {Header} from "../../components/common/Header";
import {Button} from "antd";
import {stores} from "../../contexts";
import {wsButtonPress} from "../../ws/messageSender";
import {observer} from "mobx-react-lite";
import {MainContent} from "./MainContent";
import {RecentsList} from "../../components/common/RecentsList";

type Props = {
  path: string;
};

const Dashboard: React.FC<Props> = observer(() => {
  // useUpToScroll();

  const openBuyCountModal = () => {
    stores.ModalStore.setActiveModal("info");
  };

  const openAdsModal = () => {
    stores.ModalStore.setActiveModal("ads");
  };

  return (
    <>
      <Header
        leftContent={
          <Button onClick={openBuyCountModal} className="btn primary">
            Правила
          </Button>
        }
        rightContent={
          <div className="flex">
            <Button className="btn primary" onClick={openAdsModal}>
              Получить клики
            </Button>
          </div>
        }
      />
      <div className="dashboard">
        <MainContent />

        <div className="dashboard__main">
          <Button className="btn circle" onClick={wsButtonPress}>
            Участвовать
          </Button>
        </div>

        <div className="dashboard__top">
          <RecentsList />
        </div>
      </div>
    </>
  );
});

export {Dashboard};
