<template>
  <div class="q-pa-md q-gutter-sm button-section-wrapper">
    <a v-if="notSearchPage" href="/"><q-btn size="md" color="grey" text-color="black" label="Back to Search" /></a>
    <a href="/about"><q-btn size="md" color="grey" text-color="black" label="About Us" /></a>
    <a href="/bookings"><q-btn size="md" color="grey" text-color="black" label="My Bookings" /></a>
    <a href="#"><q-btn size="md" color="grey" text-color="black" label="Sign-in" /></a>
  </div>
</template>
<script>
export default {
  props: ['notSearchPage'],
  name: 'ButtonBlock'
}
</script>
<style lang="sass" scoped>
  .button-section-wrapper
    padding-right: 0px
    display: flex
    align-items: flex-end
  a
    text-decoration: none
  @media(orientation: portrait)
    .button-section-wrapper
      display: none
</style>
