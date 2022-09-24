export const APP_ID = 51400811;
export const GROUP_ID = 0;
export const NAME_PROJECT = "bonus-hub";
export const routeUrl =
  process.env.NODE_ENV === "production" ? "/bonus-hub" : "";

const vkValidationParams = new URLSearchParams(document.location.search);

// получение ID пользователя который зашел в приложение
export const USER_ID = Number(
  new URLSearchParams(document.location.search).get("vk_user_id")
);
export const vkValidationParamsString = global.location.search;

export const vkValidationParamsData = {
  vk_access_token_settings: "",
  vk_app_id: vkValidationParams.get("vk_app_id"),
  vk_are_notifications_enabled: vkValidationParams.get(
    "vk_are_notifications_enabled"
  ),
  vk_is_app_user: vkValidationParams.get("vk_is_app_user"),
  vk_is_favorite: vkValidationParams.get("vk_is_favorite"),
  vk_language: vkValidationParams.get("vk_language"),
  vk_platform: vkValidationParams.get("vk_platform"),
  vk_ref: vkValidationParams.get("vk_ref"),
  vk_ts: vkValidationParams.get("vk_ts"),
  vk_user_id: vkValidationParams.get("vk_user_id"),
  sign: vkValidationParams.get("sign"),
};

export const vkValidationParamsDataJSON = JSON.stringify(
  vkValidationParamsData
);

export const refId = Number(document.location.hash.replace("#", ""));

export const sharingLink = `https://vk.com/app${APP_ID}#${USER_ID}`;
