<template>
  <el-select placeholder="请选择" clearable :value="value" @change="fn">
    <el-option v-for="item in channelOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'my-channel',
  props: ['value'],
  data () {
    return {
      // value: null,
      channelOptions: []
    }
  },
  created () {
    this.getchannelOptions()
  },
  methods: {
    // 获取频道选项数据
    async getchannelOptions () {
      // 获取数据s
      const {
        data: { data }
      } = await this.$http.get('channels')
      // 赋值
      this.channelOptions = data.channels
    },
    fn (channelID) {
      if (channelID === '') channelID = null
      // 把ID提交给父组件
      this.$emit('input', channelID)
    }
  }
}
</script>

<style>
</style>
