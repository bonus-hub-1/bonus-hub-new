import {observable, action, makeObservable} from "mobx";
import {RecentsType, UserInfoType} from "../types/user";

export class UserStore {
  loading: boolean = false;
  token: string = "";
  timer: string = "";
  hasTries: number = 0;
  recents: RecentsType[] = [];
  refersCount: number = 0;

  setUserInfo = (data: UserInfoType) => {
    this.hasTries = data.has_tries;
    this.timer = data.timer;
    this.recents = data.recents;
    this.refersCount = data.referrals_count;
  };

  updateUserTimer = (data: UserInfoType) => {
    this.hasTries = data.has_tries;
    this.timer = data.timer;
    this.recents = data.recents;
  };

  updateReferralInfo = (data: UserInfoType) => {
    this.hasTries = data.has_tries;
    this.refersCount = data.referrals_count;
  };

  setUserToken = (token: string) => {
    this.token = token;
  };

  resetStore = () => {
    this.loading = false;
    this.timer = "";
  };

  constructor() {
    makeObservable(this, {
      loading: observable,
      token: observable,
      hasTries: observable,
      recents: observable,
      timer: observable,
      refersCount: observable,
      resetStore: action,
      setUserInfo: action,
      setUserToken: action,
      updateUserTimer: action,
    });
  }
}
