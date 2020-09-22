<template>
  <div class="input-wrapper">
    <q-input outlined v-model="text" label="Outlined" dense="true" />
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
  .q-field__control
    height: 10px !important
</style>
