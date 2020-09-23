<template>
  <div class="input-wrapper">
    <label for="CheckOutPicker"><span class="label-span">Check-out</span></label>
    <q-input outlined v-model="date" filled type="date" hint="Native date" name="CheckOutPicker" :dense="true" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      date: 'dd.mm.yyyy'
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
