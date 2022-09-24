import React, {useState, useEffect} from "react";
import {useStores} from "../../hooks/useStores";
import {observer} from "mobx-react-lite";
import {TransferModal} from "./BuyModal";
import {InfoModal} from "./InfoModal";
import {AdsModal} from "./AdsModal";
import {SharingModal} from "./SharingModal";

const RootModal: React.FC = observer(() => {
  const {ModalStore} = useStores();

  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    switch (ModalStore.activeModal) {
      case "buy":
        setVisible(true);
        break;
      case "info":
        setVisible(true);
        break;
      case "ads":
        setVisible(true);
        break;
      case "sharing":
        setVisible(true);
        break;
      default:
        break;
    }
  }, [ModalStore.activeModal]);

  return (
    <>
      {ModalStore.activeModal === "buy" && (
        <TransferModal visible={visible} setVisible={setVisible} />
      )}
      {ModalStore.activeModal === "info" && (
        <InfoModal visible={visible} setVisible={setVisible} />
      )}
      {ModalStore.activeModal === "ads" && (
        <AdsModal visible={visible} setVisible={setVisible} />
      )}
      {ModalStore.activeModal === "sharing" && (
        <SharingModal visible={visible} setVisible={setVisible} />
      )}
    </>
  );
});

export {RootModal};
