<template>
  <div class="input-wrapper">
    <label for="ChildrenPicker"><span class="label-span">Children</span></label>
    <q-input outlined v-model="text" label="Outlined" name="CildrenPicker" :dense="true" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
<style scoped lang="sass">
.input-wrapper
  width: 45%
@media(orientation: portrait)
  .input-wrapper
    width: 49%
    margin: 5px 0
  .input-wrapper
    .label-span
      margin: 0 0 0 10px
</style>
