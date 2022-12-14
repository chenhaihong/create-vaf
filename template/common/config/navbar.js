export default {
  /**
   * 是否启用过滤器, 默认启用.
   * 禁用后, 将显示所有的导航菜单.
   */
  enableFilter: true,
  hideUserinfo: false,
  menus: [
    {
      /**
       * type = router-link => vue-router路由地址
       * type = http-link   => http地址
       */
      type: "router-link",
      id: "/pro-components",
      path: "/pro-components/vaf-pro-form",
      title: "Pro组件",
      /**
       * 使用icon组件名称来添加主菜单图标
       * 图标列表: https://element-plus.org/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88
       */
      icon: "Cpu",
      /**
       * 依赖 authLevel authRoles 这2个字段，来完成菜单的角色过滤
       */
      authLevel: 0, // 0=>匿名 | 1=>登录(默认) | 2=>需鉴别角色
      // authRoles: [], // 当鉴权等级为2时，该字段才有效，默认为空数组
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
      path: "https://cn.vuejs.org/",
      title: "Vue",
      icon: "Link",
      authLevel: 0,
    },
    {
      type: "http-link",
      path: "https://element-plus.org/",
      title: "element-plus",
      icon: "ElementPlus",
      authLevel: 0,
    },
  ],
};
