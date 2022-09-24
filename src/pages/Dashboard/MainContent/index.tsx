import moment from "moment";
import React from "react";
import {Timer} from "../../../components/common/Timer";
import {useStores} from "../../../hooks/useStores";
import {SpinnerIcon} from "../../../Icons";
import {observer} from "mobx-react-lite";

const MainContent: React.FC = observer(() => {
  const {UserStore} = useStores();

  const utcOffset = moment(UserStore.timer).utcOffset() / 60;

  console.log("UserStore.timer", UserStore.timer);

  return (
    <>
      <div className="dashboard__info">
        <div className="flex items-center">
          <span>Кол-во кликов: </span>{" "}
          {UserStore.hasTries || <SpinnerIcon size={18} />}
        </div>
        <div>Рефералы: {UserStore.refersCount}</div>
      </div>
      <div className="dashboard__title">
        <div>НАЖМИ КНОПКУ</div>
        <div>И УЧАСТВУЙ В РОЗЫГРЫШЕ!!!</div>
        <div>ВЫИГРАЙ 5000,00 ₽</div>
      </div>

      <div>
        <div style={{fontSize: "16px"}}>
          Прошло времени с последнего клика:{" "}
        </div>
        {UserStore.timer ? (
          <Timer
            expiryTimestamp={moment(UserStore.timer)
              .add(utcOffset, "hours")
              .toDate()}
          />
        ) : (
          <div className="flex justify-center">
            <SpinnerIcon size={40} />
          </div>
        )}
      </div>
    </>
  );
});

export {MainContent};
