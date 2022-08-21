/**
 * 统一使用@erye/vaf提供的getRequest方法
 */

import { getRequest } from "@erye/vaf";

import vafAppId from "@common/config/vafAppId";

export default (...options) => {
  // 使用vaf内部的请求方法，里边实现好了登录状态的处理逻辑
  const request = getRequest(vafAppId);
  return request(...options);
};
