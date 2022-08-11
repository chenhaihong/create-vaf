<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">
          <slot name="header"></slot>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <slot></slot>
        </el-col>
      </el-row>
      <el-row :gutter="20" justify="center">
        <slot name="footer"></slot>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "VafPageContainer",
};
</script>

<style lang="scss"></style>
