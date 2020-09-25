<template>
  <div class="search-result-list">
    <div class="search-result-item" v-for="item in filteredList" :key="item.id">
      <HotelItem :itemData="item" />
    </div>
  </div>
</template>
<script>
import HotelItem from 'components/HotelItem.vue'
export default {
  components: {
    HotelItem
  },
  props: ['filterKeys', 'ratingOption', 'initialSearch'],
  data () {
    return {
      isDetailsShown: false
    }
  },
  methods: {
    showHotelDetails () {
      this.isDetailsShown = true
    }
  },
  computed: {
    filteredList () {
      console.log(this.filterKeys, this.ratingOption)
      if (this.filterKeys && !this.ratingOption) {
        console.log('only keys')
        return this.initialSearch.filter(elem => elem.name.toLowerCase().includes(this.filterKeys.toLowerCase()))
      } else if (this.filterKeys && this.ratingOption) {
        console.log('keys and rating')
        return this.initialSearch.filter(elem => elem.name.toLowerCase().includes(this.filterKeys.toLowerCase())).filter(elem => Math.floor(elem.hotel_rating) === this.ratingOption)
      } else if (!this.filterKeys && this.ratingOption) {
        console.log('only rating')
        return this.initialSearch.filter(elem => elem.hotel_rating === this.ratingOption)
      } else {
        console.log('no criteria')
        return this.initialSearch
      }
    }
  }
}
</script>
<style lang="sass" scoped>
  .search-result-list
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    width: 70%
    height: fit-content
    min-height: 100px
    border-radius: 5px
    max-height: 80vh
    overflow-y: scroll
  .search-result-item
    display: flex
    flex-direction: row
    align-items: center
    justify-content: flex-start
    width: 100%
    height: 140px
    min-height: fit-content
    border-radius: 5px
    border: 3px solid $grey-6
    margin: 0 0 10px 0
    background-color: white
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
  .hotel-rating
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
    width: 30%
    height: 30px
  .star-icons-wrapper
    width: 30px
    height: 30px
    margin: 0 2px
  .star-icon
    width: 28px
    height: 28px
    background-image: url('../assets/icons/star.svg')
    background-size: 28px 28px
    background-repeat: none
  .no-star-icon
    color: #9c27b0
  @media(max-width: 415px)
    .search-result-list
      width: 100%
</style>
