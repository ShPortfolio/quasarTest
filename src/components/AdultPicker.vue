<template>
  <div class="input-wrapper">
    <label for="AdultPicker"><span class="label-span">Adults</span></label>
    <q-input outlined v-model="text" label="Outlined" name="AdultPicker" :dense="true" />
  </div>
</template>
<script>
export default {
  name: 'AdultPicker',
  data () {
    return {
      text: ''
    }
  }
}
</script>
<style lang="sass" scoped>
.q-field--dense .q-field__label
  top: -25px
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
