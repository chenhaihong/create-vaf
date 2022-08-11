/**
 * 模块——首页
 */

const VafAuthLevel = 1; // 登录才能访问

export default [
  {
    path: "/home",
    meta: {
      // 把path当做id就行了,
      // 当与左侧菜单的id匹配上, 就会高亮左侧菜单.
      VafLeftmenuId: "/home",
      VafAuthLevel,
      title: "首页",
    },
    component: () => import("@pages/Home.vue"),
  },
  {
    path: "/docs",
    meta: {
      VafLeftmenuId: "/docs",
      VafAuthLevel,
      title: "参考文档",
    },
    component: () => import("@pages/Docs.vue"),
  },
];
