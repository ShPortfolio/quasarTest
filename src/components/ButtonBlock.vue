<template>
  <div class="q-pa-md q-gutter-sm button-section-wrapper">
    <q-btn size="md" color="grey" text-color="black" label="About Us" />
    <q-btn size="md" color="grey" text-color="black" label="My Bookings" />
    <q-btn size="md" color="grey" text-color="black" label="Sign-in" />
  </div>
</template>
<script>
export default {
  name: 'ButtonBlock'
}
</script>
<style lang="sass" scoped>
  .button-section-wrapper
    padding-right: 0px
  @media(orientation: portrait)
    .button-section-wrapper
      display: none
</style>
