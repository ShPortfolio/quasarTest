<template>
  <div class="input-wrapper">
    <label for="DestinationPicker"><span class="label-span">Destination</span></label>
    <!-- <q-input outlined v-model="text" name="DestinationPicker"  /> -->
    <q-input outlined v-model="search" name="DestinationPicker"  filled type="search" hint="Search" :dense="true">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: ''
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
