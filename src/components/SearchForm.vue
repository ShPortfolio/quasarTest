<template>
  <div class="q-form-md flex wrapper" lang="es">
    <div class="inputs flex">
      <DestinationPicker @setDestination="destinationChange" />
      <CheckinPicker @setCheckinDate="checkinChange" />
      <CheckoutPicker @setCheckoutDate="checkoutChange"/>
      <div class="age-section flex">
        <AdultPicker @changeNumber="adultNumberChange" />
        <ChildrenPicker @setChildrenNumber="childrenNumberChange" />
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
import { mapActions } from 'vuex'
import axios from 'axios'
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
      isDestination: false,
      isCheckin: false,
      isCheckout: false,
      searchObj: {
        adultNumber: 1,
        childrenNumber: 0,
        destination: null,
        checkin: null,
        checkout: null
      },
      objectFilledProperly: false
    }
  },
  methods: {
    submit () {
      this.checkIfObjectNotEmpty()
      if (this.objectFilledProperly) {
        this.getHotels()
        const storedObject = JSON.parse(JSON.stringify(this.searchObj))
        this.postSearchObjectInDb(storedObject)
        this.$emit('filterSearch', storedObject.destination)
        this.$emit('showSearchResult', false)
        this.$emit('findWithCriteria', storedObject)
      }
    },
    async postSearchObjectInDb (storedObject) {
      axios.post('http://localhost:3000/Search-criteria', {
        searchObject: storedObject
      })
        .then(response => {})
        .catch(e => {
          this.erros.push(e)
        })
    },
    checkIfObjectNotEmpty () {
      const arrFromObj = Object.entries(this.searchObj)
      this.objectFilledProperly = arrFromObj.every(x => x !== null)
    },
    adultNumberChange (value) {
      this.$set(this.searchObj, 'adultNumber', value) // I had to use it because of reactivity problem with object updating in quasar (vue dev tools still doesn't see changes immediately)
    },
    destinationChange (value) {
      this.$set(this.searchObj, 'destination', value)
      this.isDestination = true
    },
    checkinChange (value) {
      this.$set(this.searchObj, 'checkin', value)
      this.isCheckin = true
    },
    checkoutChange (value) {
      this.$set(this.searchObj, 'checkout', value)
      this.isCheckout = true
    },
    childrenNumberChange (value) {
      this.$set(this.searchObj, 'childrenNumber', value)
    },
    ...mapActions('searchData', ['getHotels'])
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
