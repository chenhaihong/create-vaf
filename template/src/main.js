import "element-plus/dist/index.css";
import "@erye/vaf/dist/index.css";
import "./main.css";

import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import {
  createVafApp,
  installVafComponents,
  installVafProComponents,
} from "@erye/vaf";

import vafAppId from "@common/config/vafAppId";
import AuthService from "@common/api/auth";
import sidebarConfig from "@common/config/sidebar";
import navbarConfig from "@common/config/navbar";
import routeConfig from "@common/route";

const { app } = createVafApp({
  vafAppId,
  settingConfig: {
    name: "@erye/vaf",
    slogan: "方便、快捷、精准",
    logo: "https://map.tiiit.cn/deer.png",
    copyright: "本网站属于个人技术分享网站",
  },
  dataFuncConfig: {
    login: AuthService.login,
    getUserinfo: AuthService.getUserinfo,
    logout: AuthService.logout,
  },
  sidebarConfig,
  navbarConfig,
  routeConfig,
});

// 注册全局组件
{
  const modules = import.meta.glob("@components/*/*.vue", { eager: true });
  Object.keys(modules).map((key) => {
    const pathname = key.slice(2, -4); // 把路径名并且截取出来
    const names = pathname.split("/"); // 拆成[目录,目录,文件名]
    const L = names.length;
    if (names[L - 1] == names[L - 2]) {
      const name = names[L - 1];
      const { default: component } = modules[key];
      app.component(name, component);
    }
  });
}

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // 注册所有图标
  app.component(key, component);
}
app.use(installVafComponents);
app.use(installVafProComponents);
app.mount("#app");
