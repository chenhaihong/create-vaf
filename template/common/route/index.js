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
