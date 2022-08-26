/**
 * 模块——超级管理员
 */

/**
 * 依赖 VafAuthLevel VafAuthRoles 这2个字段，来完成路由的鉴权
 */
const VafAuthLevel = 2; // 0=>匿名 | 1=>登录(默认) | 2=>需鉴别角色
const VafAuthRoles = ["super-admin"]; // 当鉴权等级为2时，该字段才有效，默认为空数组

export default [
  {
    path: "/super-admin/admin",
    meta: {
      VafId: "/super-admin/admin",
      VafAuthLevel,
      VafAuthRoles,
      title: "管理员列表",
    },
    component: () => import("@pages/SuperAdmin/Admin.vue"),
  },
  {
    path: "/super-admin/admin-role",
    meta: {
      VafId: "/super-admin/admin-role",
      VafAuthLevel,
      VafAuthRoles,
      title: "管理员角色",
    },
    component: () => import("@pages/SuperAdmin/AdminRole.vue"),
  },
  {
    path: "/super-admin/api/admin-api",
    meta: {
      VafId: "/super-admin/api/admin-api",
      VafAuthLevel,
      VafAuthRoles,
      title: "管理员API",
    },
    component: () => import("@pages/SuperAdmin/AdminApi.vue"),
  },
  {
    path: "/super-admin/api/client-api",
    meta: {
      VafId: "/super-admin/api/client-api",
      VafAuthLevel,
      VafAuthRoles,
      title: "客户端API",
    },
    component: () => import("@pages/SuperAdmin/ClientApi.vue"),
  },
];
