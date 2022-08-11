/**
 * 模块——超级管理员
 */

const VafAuthLevel = 2; // 需验证角色才能访问
const VafAuthRoles = ["super-admin"];

export default [
  {
    path: "/super-admin/admin",
    meta: {
      VafLeftmenuId: "/super-admin/admin",
      VafAuthLevel,
      VafAuthRoles,
      title: "管理员列表",
    },
    component: () => import("@pages/SuperAdmin/Admin.vue"),
  },
  {
    path: "/super-admin/admin-role",
    meta: {
      VafLeftmenuId: "/super-admin/admin-role",
      VafAuthLevel,
      VafAuthRoles,
      title: "管理员角色",
    },
    component: () => import("@pages/SuperAdmin/AdminRole.vue"),
  },
  {
    path: "/super-admin/api/admin-api",
    meta: {
      VafLeftmenuId: "/super-admin/api/admin-api",
      VafAuthLevel,
      VafAuthRoles,
      title: "管理员API",
    },
    component: () => import("@pages/SuperAdmin/AdminApi.vue"),
  },
  {
    path: "/super-admin/api/client-api",
    meta: {
      VafLeftmenuId: "/super-admin/api/client-api",
      VafAuthLevel,
      VafAuthRoles,
      title: "客户端API",
    },
    component: () => import("@pages/SuperAdmin/ClientApi.vue"),
  },
];
