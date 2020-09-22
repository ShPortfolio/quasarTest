<template>
<div class="q-pa-md">
  <div class="text-purple q-gutter-md">
    <div class="wrapper">
      <div class="purple-circle"></div>
      <div class="text-h3 text-uppercase name">travolta</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'CompanySection',
  data () {
    return {

    }
  }
}
</script>
<style lang='sass' scoped>
.text-purple
  display: flex
  flex-direction: row

.purple-circle
  display: flex
  background-color: $purple-13
  width: 10vh
  height: 100%
  border-radius: 50%
  margin-right: 10px

.wrapper
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center
  height: 10vh

.name
  display: flex
  flex-direction: row
  align-items: center
  color: black
  margin-left: auto
</style>
