<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">
          <p>欢迎使用 <span class="name">@erye/vaf</span> 来构建管理员管理平台！</p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24"> </el-col>
      </el-row>
      <el-row :gutter="20" justify="center"> </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.name {
  padding: 2px 6px;
  color: #666;
  background: #f3f3f3;
  border-radius: 6px;
}
</style>
