<template>
  <div class="q-form-md flex wrapper">
    <DestinationPicker />
    <CheckinPicker />
    <CheckoutPicker />
    <AdultPicker />
    <ChildrenPicker />
    <q-btn @click="submit()" label="SEARCH" size="md"/>
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
  },
  methods: {
    submit: function () {
      console.log('submit')
    }
  }
}
</script>
<style lang='sass' scoped>
button
  background-color: $purple-13
  color: white
  border-radius: 5px
  outline: none
button:active
  background-color: $purple-14
.wrapper
  justify-content: space-between
  align-items: center
  height: 50%
  width: 91%
</style>
