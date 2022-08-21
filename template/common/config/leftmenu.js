export default {
  logo: "/images/deer.png", // 侧边栏上的logo的地址
  menus: [
    {
      /**
       * type = router-link => vue-router路由地址
       * type = http-link   => http地址
       */
      type: "router-link",
      id: "/module--home",
      path: "/home",
      title: "首页",
      /**
       * 使用icon组件名称来添加主菜单图标
       * 图标列表: https://element-plus.org/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88
       */
      icon: "House",
      /**
       * 依赖 authLevel authRoles 这2个字段，来完成菜单的角色过滤
       */
      authLevel: 1, // 0=>匿名 | 1=>登录(默认) | 2=>需鉴别角色
      // authRoles: [], // 当鉴权等级为2时，该字段才有效，默认为空数组
      /**
       * 通过children字段来加入子菜单，支持多级菜单
       */
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
      icon: "Avatar",
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
      type: "http-link", // http-link 不支持子菜单
      path: "https://www.npmjs.com/package/@erye/vaf",
      title: "@erye/vaf",
      authLevel: 0,
    },
  ],
};
