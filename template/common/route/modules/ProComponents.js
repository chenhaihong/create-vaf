const VafAuthLevel = 1; // 登录才能访问

export default [
  {
    path: "/pro-components/vaf-pro-form",
    meta: {
      VafLeftmenuId: "/pro-components/vaf-pro-form",
      VafAuthLevel,
      title: "vaf-pro-form",
    },
    component: () => import("@pages/ProComponents/VafProForm.vue"),
  },
  {
    path: "/pro-components/vaf-pro-table",
    meta: {
      VafLeftmenuId: "/pro-components/vaf-pro-table",
      VafAuthLevel,
      title: "vaf-pro-table",
    },
    component: () => import("@pages/ProComponents/VafProTable.vue"),
  },
];
