import {useEffect, useRef, SetStateAction, Dispatch, useState} from "react";
import {Form, Input, Button, Modal} from "antd";
import {useStores} from "../../../hooks/useStores";
import {observer} from "mobx-react-lite";
import {CloseOutlined} from "@ant-design/icons";
import "./AdsModal.scss";
import {addGroup, nativeAds} from "../../../utils/bridge-method";
import {Push} from "../../common/Push";
import {wsAds} from "../../../ws/messageSender";
import {GROUP_ID} from "../../../utils/constants";

type TransferModalType = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const AdsModal = observer(({visible, setVisible}: TransferModalType) => {
  const {UserStore, ModalStore, SnackbarStore} = useStores();
  const form = useRef<any>();

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

  const openAds = async () => {
    await wsAds();
    ModalStore.resetStore();
  };

  const subGroup = async () => {
    await addGroup(GROUP_ID);
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
            1. За каждые 3 просмотров рекламы, дается 1 дополнительная попытка.
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
          <Button className="btn primary stretched" onClick={openAds}>
            Смотреть
          </Button>
          <Push size={16} orientation="horizontal" />
          <Button className="btn primary stretched" onClick={openSharingModal}>
            Поделиться
          </Button>
        </div>
        {!UserStore.subscribed && (
          <>
            <Push size={16} orientation="vertical" />
            <div className="flex flex-row">
              <Button className="btn primary stretched" onClick={subGroup}>
                Подписаться на группу (+1 попытка)
              </Button>
            </div>
          </>
        )}
      </Form>
    </Modal>
  );
});

export {AdsModal};
