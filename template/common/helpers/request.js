/**
 * 统一使用@erye/vaf提供的getRequest方法
 */

import { getRequest } from "@erye/vaf";

import vafAppId from "@common/config/vafAppId";

export default (...options) => {
  const request = getRequest(vafAppId);
  return request(...options);
};
