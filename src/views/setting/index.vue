<template>
  <div class="container-setting">
    <el-card>
      <div slot="header">
        <my-bread>个人设置</my-bread>
      </div>
      <el-row>
        <el-col :span="12">
          <el-form label-width="120px">
            <el-form-item label="编号：">{{userInfo.id}}</el-form-item>
            <el-form-item label="手机：">{{userInfo.mobile}}</el-form-item>
            <el-form-item label="媒体名称：">
              <el-input v-model="userInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="媒体介绍：">
              <el-input v-model="userInfo.intro" type="textarea" :rows="3"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：">
              <el-input v-model="userInfo.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveInfo">保存设置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <el-upload
            class="avatar-uploader"
            action="http://ttapi.research.itcast.cn/mp/v1_0/user/images"
            :show-file-list="false"
            :http-request="updatePhoto"
          >
            <img :src="userInfo.photo" v-if="userInfo.photo" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p style="text-align:center">修改头像</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import eventBus from '@/eventBus'
import local from '@/utils/local'
export default {
  data () {
    return {
      userInfo: {
        name: null,
        intro: null,
        email: null,
        mobile: null,
        photo: null
      }
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const { data: { data } } = await this.$http.get('user/profile')
      this.userInfo = data
    },
    // 保存用户信息
    async saveInfo () {
      await this.$http.patch('user/profile', {
        name: this.userInfo.name,
        intro: this.userInfo.intro,
        email: this.userInfo.email
      })
      this.$message.success('保存用户信息成功')
      // 更新home
      eventBus.$emit('updateName', this.userInfo.name)
      // 更新本地存储
      const user = local.getUser()
      user.name = this.userInfo.name
      local.setUser(user)
    },
    // 修改图片上传头像
    async updatePhoto (result) {
      const file = result.file
      const formData = new FormData()
      formData.append('photo', file)
      const { data: { data } } = await this.$http.patch('user/photo', formData)
      this.userInfo.photo = data.photo
      this.$message.success('修改头像成功')
      eventBus.$emit('updatePhoto', data.photo)
      const user = local.getUser()
      user.photo = data.photo
      local.setUser(user)
    }
  }
}
</script>

<style>
</style>
