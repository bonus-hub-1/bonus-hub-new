import {observable, action, makeObservable} from "mobx";
import {RecentsType, UserInfoType} from "../types/user";

export class UserStore {
  loading: boolean = false;
  token: string = "";
  timer: string = "";
  hasTries: number = 0;
  recents: RecentsType[] = [];
  refersCount: number = 0;
  ads: boolean | undefined = undefined;
  wait: number = 0;
  subscribed: boolean = false;

  setUserInfo = (data: UserInfoType) => {
    this.hasTries = data.has_tries;
    this.timer = data.timer;
    this.recents = data.recents;
    this.refersCount = data.referrals_count;
    this.subscribed = data.subscribed;
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

  updateAds = (data: UserInfoType) => {
    this.ads = data.ads;
    this.wait = data.wait;
    this.hasTries = data.has_tries;
  };

  setUserToken = (token: string) => {
    this.token = token;
  };

  setSubGroup = (data: UserInfoType) => {
    this.subscribed = data.subscribed;
    this.hasTries = data.has_tries;
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
      ads: observable,
      wait: observable,
      resetStore: action,
      setUserInfo: action,
      setUserToken: action,
      updateUserTimer: action,
      updateAds: action,
    });
  }
}
