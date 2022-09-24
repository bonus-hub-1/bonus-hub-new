export type RecentsType = {
  first_name: string;
  last_name: string;
  last_time_pressed: string;
  photo_100: string;
};

export type UserInfoType = {
  has_tries: number;
  timer: string;
  recents: RecentsType[];
  referrals_count: number;
};
