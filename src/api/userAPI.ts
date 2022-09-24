import {UserInfo} from "@vkontakte/vk-bridge/dist/types/src/types/data";
import axios from "axios";
import {vkValidationParamsString} from "../utils/constants";

class ProfileAPI {
  loginUser = async (userData: UserInfo): Promise<string> => {
    const res = await axios.post(`/v1/auth/login/${vkValidationParamsString}`, {
      ...userData,
    });
    return res.data;
  };

  // updateSkill = (params) => {
  //   return axios.post("/api.user.upgrade_skill", params);
  // };

  // getUserHistory = (userId) => {
  //   return axios.post("/api.user.get_history", { user_uuid: userId });
  // };

  // userStealIq = (userId, fromId) => {
  //   return axios.post("/api.user.steal_iq", {
  //     user_uuid: userId,
  //     from_uuid: fromId,
  //   });
  // };
}

const userAPI = new ProfileAPI();
export default userAPI;
