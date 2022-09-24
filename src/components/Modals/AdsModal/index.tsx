import {useEffect, useRef, SetStateAction, Dispatch} from "react";
import {Form, Input, Button, Modal} from "antd";
import {useStores} from "../../../hooks/useStores";
import {observer} from "mobx-react-lite";
import {CloseOutlined} from "@ant-design/icons";
import "./AdsModal.scss";
import {nativeAds} from "../../../utils/bridge-method";
import {Push} from "../../common/Push";

type TransferModalType = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const AdsModal = observer(({visible, setVisible}: TransferModalType) => {
  const form = useRef<any>();
  const {ModalStore} = useStores();

  useEffect(() => {
    form.current?.resetFields();
  }, []);

  const onValuesChange = () => {
    // const {name, amount, complexity} = form?.current?.getFieldsValue();
  };

  const onFormSubmit = (values: any) => {
    // const {name, amount, complexity} = values;
  };

  const canselHandler = () => {
    setVisible(false);
    form.current?.resetFields();
    ModalStore.resetStore();
  };

  const openSharingModal = () => {
    ModalStore.setActiveModal("sharing");
  };

  return (
    <Modal
      className="ads-modal"
      closeIcon={<CloseOutlined />}
      closable={true}
      visible={visible}
      title={null}
      footer={null}
      centered={true}
      onCancel={canselHandler}>
      <Form
        ref={form}
        layout="vertical"
        onValuesChange={onValuesChange}
        onFinish={onFormSubmit}
        requiredMark={false}>
        <div className="modal-title">Получение допоплнительных кликов</div>
        <div className="modal-description">
          <b>Способ № 1</b>
          <p>
            1. Каждый день дается 10 дополнительных кликов за каждые 10
            просмотров рекламы.
          </p>
          <p>2. Чтобы посмотреть рекламу, нажмите кнопку "Смотреть".</p>

          <b>Способ № 2</b>
          <p>
            Можно пригласить друзей и за каждого друга, который зайдет в
            приложение и нажмет 1 раз кнопку участвовать, вы получите 1
            дополнительный клик.
          </p>
          <p>
            Чтобы поделиться вашей реферальной ссылкой, нажмите кнопку
            "Поделиться"
          </p>
        </div>
        <div className="flex flex-row">
          <Button className="btn primary stretched" onClick={nativeAds}>
            Смотреть
          </Button>
          <Push size={16} orientation="horizontal" />
          <Button className="btn primary stretched" onClick={openSharingModal}>
            Поделиться
          </Button>
        </div>
      </Form>
    </Modal>
  );
});

export {AdsModal};
