/**
 * @erye/vaf约束的路由
 */

import HomeModule from "./modules/home";
import SuperAdminModule from "./modules/superAdmin";
import ProComponents from "./modules/ProComponents";

export default [...HomeModule, ...SuperAdminModule, ...ProComponents];
