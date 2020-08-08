// 结构复用
<template>
  <div>
    <NavHeader />
    <router-view></router-view>
    <NavFooter />
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader/NavHeader'
import NavFooter from '../components/NavFooter/NavFooter'

export default {
  name: 'home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style lang="sass" scoped>

</style>