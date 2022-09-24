import bridge, {UserInfo} from "@vkontakte/vk-bridge";
import {useState, useEffect} from "react";

export const useUpToScroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export const useGetUserInfo = () => {
  const [fetchedUser, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
    }
    fetchData();
  }, []);

  return fetchedUser;
};
