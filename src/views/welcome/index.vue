<template>
  <div class="container">
    <img src="../../assets/welcome.jpg" alt />
  </div>
</template>

<script>
export default {
  created () {
    this.$http
      .get('articles')
      .then(res => {
        console.log(res.data)
      })
      .catch(() => {
        console.log('error')
      })
  }
}
</script>

<style lang="less" scoped>
img {
  display: block;
  margin: 0 auto;
}
</style>>
