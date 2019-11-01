import myBread from '@/components/my-bread'
import MyChannel from '@/components/my-channel'
export default {
  install (Vue) {
    // Vue.component('my-bread', Mybread)
    Vue.component(myBread.name, myBread)
    Vue.component(MyChannel.name, MyChannel)
  }
}
