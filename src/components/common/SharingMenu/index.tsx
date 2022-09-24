import React from "react";
import {observer} from "mobx-react-lite";
import {
  ActionSheet,
  ActionSheetItem,
  CellButton,
  Group,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  View,
} from "@vkontakte/vkui";
import {useStores} from "../../../hooks/useStores";
import {
  copyLink,
  share,
  shareLink,
  sharingStory,
} from "../../../utils/bridge-method";

const SharingMenu: React.FC = observer(() => {
  const {SharingMenuStore} = useStores();

  return (
    <div className="flex items-center flex-column">
      <div className="sharing-item" onClick={shareLink}>
        Поделиться ссылкой
      </div>
      <div className="sharing-item" onClick={copyLink}>
        Скопировать ссылку
      </div>
      <div className="sharing-item" onClick={sharingStory}>
        Поделиться в истории
      </div>
      <div className="sharing-item" onClick={(e) => share(e)}>
        Поделиться на стене
      </div>
    </div>
  );
});

export {SharingMenu};
