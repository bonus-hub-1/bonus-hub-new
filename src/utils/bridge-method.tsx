import bridge, {EAdsFormats} from "@vkontakte/vk-bridge";
import {stores} from "../contexts/index";
import {wsSubGroup} from "../ws/messageSender";
import {APP_ID, sharingLink, USER_ID} from "./constants";

// получение токена пользователя
export function getUserToken(scope: any) {
  return bridge
    .send("VKWebAppGetAuthToken", {
      app_id: APP_ID,
      scope: scope.join(),
    })
    .then((res) => {
      stores.UserStore.setUserToken(res.access_token);
    })
    .catch((err) => {});
}

// разрешение на отправку сообщений от имени группы
export function subscribeMessageFromGroup(groupIDsubscription: number) {
  bridge
    .send("VKWebAppAllowMessagesFromGroup", {
      group_id: groupIDsubscription,
    })
    .then((res) => {})
    .catch((err) => {});
}

// подписка на группу
export async function addGroup(groupId: number) {
  bridge
    .send("VKWebAppJoinGroup", {group_id: groupId})
    .then(({result}) => {
      wsSubGroup();
    })
    .catch((err) => {});
}

// добавление сервиса в сообщество
export function AddToCommunity() {
  bridge
    .send("VKWebAppAddToCommunity", {})
    .then((res) => {})
    .catch((err) => {});
}

// открытие др приложение
export function goToApp(appID: number, location: string) {
  // location (string) Хеш, строка после # в URL вида vk.com/app123456#.
  bridge.send("VKWebAppOpenApp", {app_id: appID, location});
}

// вызов метода vk api
// groups.get
export async function getApiMethod(token: string, method: string) {
  return bridge
    .send("VKWebAppCallAPIMethod", {
      method: method,
      params: {
        user_id: USER_ID,
        v: "5.131",
        access_token: token,
        // filter: "admin", // является ли данный пользователь админом
        extended: 1,
      },
    })
    .then((res) => {
      // stores.UserStore.setUserGroups(res.response.items);
    })
    .catch((err) => {});
}

// открытие рекламного ролика
export const nativeAds = async () => {
  return bridge
    .send("VKWebAppShowNativeAds", {
      ad_format: EAdsFormats.REWARD,
    })
    .then((res) => {
      console.log("ads res", res);
    })
    .catch((err) => {
      console.log("ads err", err);
    });
};

// Поделиться ссылкой
export const shareLink = () => {
  bridge.send("VKWebAppShare", {
    link: sharingLink,
  });
};

// Копирование в буфер
export const copyLink = () => {
  bridge
    .send("VKWebAppGetClientVersion")
    .then((result) => {
      console.log(result.platform);
      if (result.platform === "web" || result.platform === "mobile-web") {
        window.navigator.clipboard.writeText(sharingLink).then(
          () => {
            console.log("successfully set", sharingLink);
            stores.SnackbarStore.setShowSnackbar(
              "Ссылка скопирована",
              "success"
            );
          },
          () => {
            console.log("write failed", sharingLink);
          }
        );
      } else {
        bridge.send("VKWebAppCopyText", {text: sharingLink});
        stores.SnackbarStore.setShowSnackbar("Ссылка скопирована", "success");
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};

//  Поделиться в истории
export const sharingStory = () => {
  const urlStories =
    "https://sun9-10.userapi.com/impg/UTdCX4NZTbH1oV7Xa_j0Ou_jcpXcR4PzfV0poA/sdgdmhgbyBM.jpg?size=887x666&quality=95&sign=2f6142a06c6c3d08030ac21d962f09f6&type=album";

  bridge.send("VKWebAppShowStoryBox", {
    background_type: "image",
    url: urlStories,
    attachment: {
      text: "go_to",
      type: "url",
      url: sharingLink,
    },
  });
};

//  Добавление репоста на стену пользователя
export const share = (e: any) => {
  e.preventDefault();

  // Создать группу и добавить картинку для шаринга в историю и на стену.
  const urlPhotoStories = `photo-215416619_457239017, ${sharingLink}`;
  const textStories = `Если твой клик будет последним, забираешь приз! Залетай в приложение, Приложение - ${sharingLink}`;

  bridge.send("VKWebAppShowWallPostBox", {
    message: textStories,
    attachments: urlPhotoStories,
  });
};
