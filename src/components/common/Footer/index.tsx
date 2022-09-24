import React from "react";
import {Button} from "antd";
import cn from "classnames";
import {observer} from "mobx-react-lite";

import "./Footer.scss";
import {useStores} from "../../../hooks/useStores";
import {
  DashboardIcon,
  WalletIcon,
  CreateCoinIcon,
  ExchangeIcon,
} from "../../../Icons";

const tabs = [
  {
    id: 1,
    icon: <DashboardIcon />,
    path: "dashboard",
  },
  {
    id: 2,
    icon: <WalletIcon />,
    path: "wallet",
  },
  {
    id: 3,
    icon: <CreateCoinIcon />,
    path: "create-coin",
  },
  {
    id: 4,
    icon: <ExchangeIcon />,
    path: "exchange",
  },
];

const Footer: React.FC = observer(() => {
  const {PanelStore} = useStores();

  return (
    <div className="footer">
      {tabs?.map((item) => {
        return (
          <Button
            className={cn({
              btn: true,
              icon: true,
              active: item.path === PanelStore.activeTab,
            })}
            onClick={() => {
              PanelStore.setActiveTab(item.path);
            }}
            key={item.id}>
            {item.icon}
          </Button>
        );
      })}
    </div>
  );
});

export {Footer};
