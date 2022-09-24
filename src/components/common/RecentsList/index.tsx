import React from "react";
import {useStores} from "../../../hooks/useStores";
import {UserItem} from "./UserItem";
import {observer} from "mobx-react-lite";
import "./RecentsList.scss";

type RecentsListProps = {};

const RecentsList: React.FC<RecentsListProps> = observer((props) => {
  const {UserStore} = useStores();

  return (
    <div className="recents-list">
      <div className="recents-list__title">Последние клики:</div>
      {UserStore.recents?.map((item, index) => {
        return (
          <UserItem
            key={index}
            topNumber={index + 1}
            firstName={item.first_name}
            lastName={item.last_name}
            lastTimePressed={item.last_time_pressed}
            photo={item.photo_100}
          />
        );
      })}
    </div>
  );
});

export {RecentsList};
