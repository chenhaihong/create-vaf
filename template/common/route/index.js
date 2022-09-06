import vanillaRoutes from "./vanillaRoutes";
import pageRoutes from "./pageRoutes";

export default {
  /**
   * 路由模式，与vue-router的模式保持一致, hash | history | memory,
   * 默认为 hash.
   */
  mode: "history",
  /**
   * 路径前缀
   */
  base: "/",
  /**
   * 是否启用登录过滤器, 默认启用.
   * 关闭了登录过滤器, 角色过滤器也会失效, 可以直接进入任意路由.
   * 这是一个很危险的操作, 这将会关闭路由的登录验证和角色鉴权功能, 导致用户可以访问访问任意路由.
   * 除非你的应用是一个不需要登录验证和角色鉴权功能的应用, 你才可以关闭登录过滤器.
   */
  enableLoginFilter: true,
  /**
   * 是否启用角色过滤器, 默认启用.
   * enableRoleFilter控制全局路由的角色鉴权, meta.VafAuthLevel 控制单个路由的角色鉴权.
   * enableRoleFilter优先级高于VafAuthLevel. 当禁用时, meta.VafAuthLevel 将失效.
   */
  enableRoleFilter: true,
  /**
   * 原生的VueRouter的路由配置，不做额外处理
   */
  vanillaRoutes,
  /**
   * vaf的页面路由，会在外边套上VafPageLayout组件
   */
  pageRoutes,
};

/**
 * 提示:
 * vaf内部拥有 "/login", "/403", "/404", "/500", "/:pathMatch(.*)*" 这些路由配置,
 * 不需要再去额外配置.
 */
