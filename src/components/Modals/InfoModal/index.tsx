import {useEffect, useRef, SetStateAction, Dispatch} from "react";
import {Form, Input, Button, Modal} from "antd";
import {useStores} from "../../../hooks/useStores";
import {observer} from "mobx-react-lite";
import {CloseOutlined} from "@ant-design/icons";
import "./InfoModal.scss";

type TransferModalType = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const InfoModal = observer(({visible, setVisible}: TransferModalType) => {
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

  return (
    <Modal
      className="info-modal"
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
        <div className="modal-title">Правила</div>
        <div className="modal-description">
          <p>
            1. Чтобы принять участие в розыгрыше, нужно нажать на кнопку
            "Участвовать".{" "}
          </p>
          <p>
            2. Каждый день дается 1 дополнительная попытка, при этом
            неиспользуемые попытки сгорают.{" "}
          </p>
          <p>
            3. После каждого нажатия кнопки, таймер сбрасывается в исходное
            значение равное 30 минутам.{" "}
          </p>
          <p>
            4. Если после нажатия на кнопку, никто больше ее не нажмет до
            истечения 30 минут, то вы становитесь победителем.{" "}
          </p>
        </div>

        <Button className="btn primary stretched" htmlType="submit">
          Ок
        </Button>
      </Form>
    </Modal>
  );
});

export {InfoModal};
