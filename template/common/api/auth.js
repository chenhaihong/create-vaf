import request from "@common/helpers/request";

export default class AuthService {
  static async login({ username, password }) {
    // return request({
    //   url: "authLogin_url",
    //   method: "post",
    //   data: { username, password },
    // });
    return [null, { token: "虚假的token" }];
  }
  static async getUserinfo() {
    // return request({ url: "authUserinfo_url", method: "post" });
    return [
      null,
      {
        userinfo: {
          username: "haihong",
          nickname: "海宏",
          avatar: "https://map.tiiit.cn/deer.png",
        },
        roles: ["super-admin"],
      },
    ];
  }
  static async logout() {
    // return request({ url: "authLogout_url", method: "post" });
    return [null, {}];
  }
}
