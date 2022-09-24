import {Badge, Avatar} from "antd";
import {observer} from "mobx-react-lite";

import "./UserItem.scss";
import moment from "moment";

type UserItemProps = {
  photo: string;
  lastName: string;
  firstName: string;
  topNumber: number;
  lastTimePressed: string;
};

// moment(props.lastTimePressed).toLocaleString()

const UserItem: React.FC<UserItemProps> = observer((props) => {
  const utcOffset = moment(props.lastTimePressed).utcOffset() / 60;

  // const;

  return (
    <div className="user">
      <Badge count={props.topNumber}>
        <Avatar size={40} shape="circle" src={props.photo} />
      </Badge>

      <div className="user-container">
        <div className="info">
          {props.firstName} {props.lastName}
        </div>
        <div className="info description">
          <div>Время клика:</div>
          {moment(props.lastTimePressed)
            .add(utcOffset, "hours")
            .format("DD.MM.YY  HH:mm:ss")}
        </div>
      </div>
    </div>
  );
});

export {UserItem};
