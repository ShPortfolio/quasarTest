<template>
    <div class="hotel-item-wrapper">
      <div class="hotel-image-wrapper">
        <img src="#" alt="hotel image" class="hotel-image">
      </div>
      <div class="hotel-description">
        <div class="hotel-name">{{itemData.name}}</div>
        <div class="hotel-rating">
          <HotelRating :ratingLength="itemData.hotel_rating" :noRatingMessage="true"/>
        </div>
        <div class="direction">
          <div class="hotel-address">{{itemData.address}},</div>
          <div class="hotel-city">{{itemData.city}},</div>
          <div class="hotel-state">{{itemData.state}}</div>
        </div>
      </div>
      <div class="button-block">
        <q-btn class="purple-button" label="Show detais" @click="showHotelDetails"/>
      </div>
  </div>
</template>
<script>
import HotelRating from 'components/HotelRating.vue'
export default {
  name: 'HotelItem',
  components: {
    HotelRating
  },
  props: ['itemData'],
  data () {
    return {
    }
  },
  methods: {
    showHotelDetails () {
      this.isDetailsShown = true
    }
  }
}
</script>
<style lang="sass" scoped>
  .hotel-item-wrapper
    width: 95%
    height: 100%
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: center
  .hotel-description
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: space-between
    width: 65%
    padding: 10px 25px
    font-size: 16px
    font-weight: 500
    height: 80%
  .hotel-name
    font-size: 18px
    font-weight: 600
  .hotel-image-wrapper
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    width: 12%
    height: 80%
    background-color: $grey-3
    margin: 10px
    border-radius: 5px
    border: 3px solid $grey-6
  .direction
    display: flex
    flex-direction: row
    justify-content: space-between
    width: 40%
    min-width: fit-content
  .hotel-address,
  .hotel-city,
  .hotel-state
    margin-right: 5px
  .purple-button
    background-color: #9c27b0
    color: white
  @media(max-width: 415px)
    .purple-button
      display: none
    .hotel-item-wrapper
      width: 100%
    .hotel-name
      font-size: 12px
      font-weight: 600
    .hotel-image-wrapper
      display: flex
      flex-direction: row
      justify-content: center
      align-items: center
      width: 40%
      height: 80%
      background-color: $grey-3
      margin: 10px
      border-radius: 5px
      border: 3px solid $grey-6
    .hotel-description
      padding: 0
    .direction
      display: flex
      flex-direction: column
      justify-content: space-between
      width: 40%
      min-width: fit-content
      font-size: 11px
      font-weight: 400
</style>
