<template>
  <div class="input-wrapper">
    <label for="DestinationPicker"><span class="label-span">Destination</span></label>
    <q-input outlined v-model="text" label="Outlined" name="DestinationPicker" :dense="true" />
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
@media (orientation: portrait)
  .input-wrapper
    width: 100%
    margin: 5px 0
  .input-wrapper
    .label-span
      margin: 0 0 0 10px
</style>
