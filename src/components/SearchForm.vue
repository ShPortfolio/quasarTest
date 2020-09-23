<template>
  <div class="q-form-md flex wrapper" lang="es">
    <div class="inputs flex">
      <DestinationPicker />
      <CheckinPicker />
      <CheckoutPicker />
      <div class="age-section flex">
        <AdultPicker />
        <ChildrenPicker />
      </div>
      <q-btn class="submit-button" @click="submit()" label="SEARCH" size="md"/>
    </div>
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
  height: 42%
  width: 91%
.inputs
  height: 100%
  width: 100%
  justify-content: space-between
  align-items: flex-start
.submit-button
  align-self: center
@media(orientation: landscape)
  .age-section
    width: 34%
    justify-content: space-between
@media(orientation: portrait)
  .age-section
    width: 100%
    flex-direction: row
    justify-content: space-between
  .wrapper
    justify-content: center
  .inputs
    justify-content: center
  .submit-button
    display: flex
    justify-content: center
    margin: 20px 0
    width: 95%
  </style>
