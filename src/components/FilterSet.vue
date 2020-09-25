<template>
  <div class="active-card">
    <div class="block-name">Filter Box</div>
    <div class="filter-wrapper">
      <label class="filter-label" for="filter">Search by name</label>
      <q-input outlined v-model="text" label="enter key" name="filter" class="filter-input" />
    </div>
    <div class="filter-by-rating-set">
      <div @click="changeRatingFilter(5)" class="rating"><HotelRating :ratingLength="5" /></div>
      <div @click="changeRatingFilter(4)" class="rating"><HotelRating :ratingLength="4" /></div>
      <div @click="changeRatingFilter(3)" class="rating"><HotelRating :ratingLength="3" /></div>
      <div @click="changeRatingFilter(2)" class="rating"><HotelRating :ratingLength="2" /></div>
      <div @click="changeRatingFilter(1)" class="rating"><HotelRating :ratingLength="1" /></div>
    </div>
  </div>
</template>
<script>
import HotelRating from 'components/HotelRating'
export default {
  components: {
    HotelRating
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    changeRatingFilter (value) {
      this.$emit('changeRatingCriteria', value)
    }
  },
  watch: {
    text (value) {
      this.$emit('filterSearchResult', value)
    }
  }
}
</script>
<style lang="sass" scoped>
  .block-name
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
    width: 100%
    height: 15%
    padding: 0 10%
    font-size: 25px
    font-weight: 500
  .active-card
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    width: 25%
    height: 445px
    min-height: 100px
    border: 3px solid $grey-6
    border-radius: 5px
    background-color: white
  .filter-wrapper
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    height: fit-content
  .filter-label
    align-self: flex-start
    font-size: 16px
    padding: 0 0 0 30px
  .filter-input
    width: 90%
  .filter-by-rating-set
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: flex-start
    width: 90%
    height: fit-content
    min-height: 100px
    padding: 20px
  .rating
    cursor: pointer
    margin: 5px 0
  .rating-opted
    background-color: $grey-3
  @media (orientation: portrait)
    @media (max-width: 414px)
      .active-card
        display: none
</style>
