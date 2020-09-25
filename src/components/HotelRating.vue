<template>
  <div class="hotel-rating">
    <div class="star-icons-wrapper" v-for="(star, index) in rating" :key="index">
      <div class="star-icon"></div>
    </div>
    <div v-if="rating === 0 && noRatingMessage" class="no-star-icon">no rating</div>
  </div>
</template>
<script>
export default {
  name: 'HotelRating',
  props: ['ratingLength', 'noRatingMessage'],
  data () {
    return {
      rating: Math.floor(this.ratingLength)
    }
  }
}
</script>
<style lang="sass" scoped>
  .hotel-rating
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
  .star-icons-wrapper
    width: 30px
    height: 30px
    margin: 0 2px
  .star-icon
    width: 28px
    height: 28px
    background-image: url('../assets/icons/felt-star.svg')
    background-size: 28px 28px
    background-repeat: no-repeat
  .no-star-icon
    color: #9c27b0
  @media(max-width: 414px)
    .star-icons-wrapper
      width: 20px
      height: 20px
      margin: 0 2px
    .star-icon
      background-image: url('../assets/icons/felt-star.svg')
      background-size: 18px 18px
      background-repeat: no-repeat
</style>
