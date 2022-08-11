export default {
  logo: "/images/deer.png", // 侧边栏上的logo的地址
  menus: [
    {
      type: "router-link",
      id: "/module--home",
      path: "/home",
      title: "首页",
      authLevel: 1,
      children: [
        {
          type: "router-link",
          id: "/home",
          path: "/home",
          title: "首页",
          authLevel: 1,
        },
        {
          type: "router-link",
          id: "/docs",
          path: "/docs",
          title: "参考文档",
          authLevel: 1,
        },
      ],
    },
    {
      type: "router-link",
      id: "/module--super-admin",
      path: "/super-admin/admin",
      title: "超管",
      authLevel: 2,
      authRoles: ["super-admin"],
      children: [
        {
          type: "router-link",
          id: "/super-admin/admin",
          path: "/super-admin/admin",
          title: "管理员",
          authLevel: 2,
          authRoles: ["super-admin"],
        },
        {
          type: "router-link",
          id: "/super-admin/admin-role",
          path: "/super-admin/admin-role",
          title: "管理员角色",
          authLevel: 2,
          authRoles: ["super-admin"],
        },
        {
          type: "router-link",
          id: "/super-admin/api",
          path: "/super-admin/api/admin-api",
          title: "API",
          authLevel: 2,
          authRoles: ["super-admin"],
          children: [
            {
              type: "router-link",
              id: "/super-admin/api/admin-api",
              path: "/super-admin/api/admin-api",
              title: "管理员Api",
              authLevel: 2,
              authRoles: ["super-admin"],
            },
            {
              type: "router-link",
              id: "/super-admin/api/client-api",
              path: "/super-admin/api/client-api",
              title: "客户端Api",
              authLevel: 2,
              authRoles: ["super-admin"],
            },
          ],
        },
      ],
    },
    {
      // 菜单组示例
      // router-link + children
      type: "router-link",
      id: "/pro-components",
      path: "/pro-components/vaf-pro-form",
      title: "Pro组件",
      authLevel: 0,
      children: [
        {
          type: "router-link",
          id: "/pro-components/vaf-pro-form",
          path: "/pro-components/vaf-pro-form",
          title: "Pro表单",
          authLevel: 0,
        },
        {
          type: "router-link",
          id: "/pro-components/vaf-pro-table",
          path: "/pro-components/vaf-pro-table",
          title: "Pro表格",
          authLevel: 0,
        },
      ],
    },
    {
      type: "http-link",
      path: "https://www.npmjs.com/package/@erye/vaf",
      title: "@erye/vaf",
      authLevel: 0,
    },
  ],
};
