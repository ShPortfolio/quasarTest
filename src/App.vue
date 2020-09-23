<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  mounted () {
    this.getDestinations()
    this.getHotels()
  },
  methods: {
    ...mapActions('searchData', ['getDestinations']),
    ...mapActions('searchData', ['getHotels'])
  }
}
</script>
