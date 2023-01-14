import React, {useEffect} from "react";
import {useStores} from "../../hooks/useStores";
import {observer} from "mobx-react-lite";
import {Snackbar, Avatar} from "@vkontakte/vkui";
import {Icon16Cancel, Icon16Done} from "@vkontakte/icons";

const CustomSnackbar: React.FC = observer(() => {
  const {SnackbarStore} = useStores();

  useEffect(() => {
    return () => {
      setTimeout(() => {
        SnackbarStore.resetStore();
      }, 4000);
    };
  });

  return (
    <>
      {SnackbarStore.showSnackbar && (
        <Snackbar
          duration={4000}
          layout="horizontal"
          onClose={() => SnackbarStore.resetStore()}
          before={
            <Avatar
              size={24}
              style={{backgroundColor: SnackbarStore.snackbarColor}}>
              {SnackbarStore.snackbarType === "success" ? (
                <Icon16Done fill="#fff" width={14} height={14} />
              ) : (
                <Icon16Cancel fill="#fff" width={14} height={14} />
              )}
            </Avatar>
          }>
          {SnackbarStore.snackbarText}
        </Snackbar>
      )}
    </>
  );
});

export {CustomSnackbar};
