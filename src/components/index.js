import myBread from '@/components/my-bread'
export default {
  install (Vue) {
    // Vue.component('my-bread', Mybread)
    Vue.component(myBread.name, myBread)
  }
}
