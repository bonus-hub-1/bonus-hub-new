import {observer} from "mobx-react-lite";
import {Push} from "../Push";

import "./Header.scss";

type Props = {
  leftContent: JSX.Element;
  prevPage?: string;
  rightContent: JSX.Element;
};

const Header: React.FC<Props> = observer(
  ({leftContent, prevPage = "", rightContent}) => {
    return (
      <div className="header">
        {leftContent && leftContent}
        <Push orientation="horizontal" size={16} />
        {rightContent && rightContent}
      </div>
    );
  }
);

export {Header};
