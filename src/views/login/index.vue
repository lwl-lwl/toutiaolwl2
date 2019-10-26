<template>
  <div class="container">
    <el-card>
      <img src="../../assets/logo_index.png" alt />
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  background: pink;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  .el-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
