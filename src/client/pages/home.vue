<template>
  <div>
    <div>My name is {{name}}</div>
    <div>{{hello}}</div>
    <button @click="getNameByRestfulApi">请求姓名</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import gql from 'graphql-tag'

export default {
  name: 'home',
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`query {
      hello
    }`
  },
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
