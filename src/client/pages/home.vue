<template>
  <div>
    <div>My name is {{name}}</div>
    <button @click="getNameByRestfulApi">请求姓名</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState({
      name: state => state.user.name
    })
  },
  methods: {
    ...mapActions(['getNameByRestfulApi'])
  }
}
</script>

<style scoped>

</style>
