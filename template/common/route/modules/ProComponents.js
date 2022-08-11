export default [
  {
    path: "/pro-components/vaf-pro-form",
    meta: {
      VafLeftmenuId: "/pro-components/vaf-pro-form",
      VafAuthLevel: 1,
      title: "vaf-pro-form",
    },
    component: () => import("@pages/ProComponents/VafProForm.vue"),
  },
  {
    path: "/pro-components/vaf-pro-table",
    meta: {
      VafLeftmenuId: "/pro-components/vaf-pro-table",
      VafAuthLevel: 1,
      title: "vaf-pro-table",
    },
    component: () => import("@pages/ProComponents/VafProTable.vue"),
  },
];
