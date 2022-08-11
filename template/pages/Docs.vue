<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">
          <vaf-pro-table ref="vafProTable" :stopCreatedQuery="false" :dataFunc="getList" :columns="columns"
            :tableProps="{ border: true }">
            <template #link="scope">
              <a :href="scope.row.path" target="_blank">{{ scope.row.path }}</a>
            </template>
          </vaf-pro-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { type: "text", prop: "title", label: " 标题" },
        { type: "any-slot", slot: "link", label: "链接" },
      ],
    };
  },
  methods: {
    getList() {
      const list = [
        { path: "https://www.npmjs.com/package/@erye/vaf", title: "@erye/vaf" },
        { path: "https://github.com/chenhaihong/vaf/tree/main/src/ProComponents/VafProForm", title: "VafProForm" },
        { path: "https://github.com/chenhaihong/vaf/tree/main/src/ProComponents/VafProTable", title: "VafProTable" },
        { path: "https://staging-cn.vuejs.org/", title: "Vue3 [New]" },
        { path: "https://v3.cn.vuejs.org/", title: "Vue3 [Old]" },
        { path: "https://router.vuejs.org/zh/index.html", title: "Vue Router" },
        { path: "https://pinia.vuejs.org/", title: "pinia" },
        { path: "https://vitejs.dev/", title: "Vit" },
        { path: "https://element-plus.gitee.io/", title: "饿了么Gitee" },
        { path: "https://element-plus.org/", title: "饿了么Github" },
        { path: "https://uniapp.dcloud.io/uniCloud/", title: "uniCloud" },
      ];
      return [
        null,
        { list, pageIndex: 1, pageSize: list.length, totalSize: list.length },
      ];
    },
  },
};
</script>

<style lang="scss">
</style>
