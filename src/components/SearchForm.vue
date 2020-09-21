<template>
  <div class="q-form-md">
    <DestinationPicker />
    <CheckinPicker />
    <CheckoutPicker />
    <AdultPicker />
    <ChildrenPicker />
    <button @click="submit">SEARCH</button>
  </div>
</template>
<script>
import DestinationPicker from 'components/DestinationPicker.vue'
import CheckinPicker from 'components/CheckinPicker.vue'
import CheckoutPicker from 'components/CheckoutPicker.vue'
import AdultPicker from 'components/AdultPicker.vue'
import ChildrenPicker from 'components/ChildrenPicker.vue'

export default {
  name: 'SearchForm',
  components: {
    DestinationPicker,
    CheckinPicker,
    CheckoutPicker,
    AdultPicker,
    ChildrenPicker
  },
  data () {
    return {

    }
  }
}
</script>
<style lang='sass' scoped>
</style>
