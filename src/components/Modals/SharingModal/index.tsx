import {SetStateAction, Dispatch} from "react";
import {Modal} from "antd";
import {useStores} from "../../../hooks/useStores";
import {observer} from "mobx-react-lite";
import {CloseOutlined} from "@ant-design/icons";
import "./SharingModal.scss";
import {SharingMenu} from "../../common/SharingMenu";
import {
  copyLink,
  share,
  shareLink,
  sharingStory,
} from "../../../utils/bridge-method";

type SharingModalType = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const SharingModal = observer(({visible, setVisible}: SharingModalType) => {
  const {ModalStore} = useStores();

  const canselHandler = () => {
    setVisible(false);
    ModalStore.resetStore();
  };

  return (
    <Modal
      className="sharing-modal"
      closeIcon={<CloseOutlined />}
      closable={true}
      visible={visible}
      title={null}
      footer={null}
      centered={true}
      onCancel={canselHandler}>
      <div className="modal-title"></div>
      <div className="modal-description">
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
      </div>
    </Modal>
  );
});

export {SharingModal};
