<template>
  <q-page class="main-block">
    <div class="up-block">
      <div class="company-section">
       <CompanySection />
     </div>
     <div class="button-block-section flex-start">
       <ButtonBlock />
     </div>
    </div>
    <div v-if="showSearchPannel" class="search-form">
      <SearchForm @showSearchResult="hideSearchPannel" @filterSearch="findWithCriteria"/>
    </div>
    <div v-else class="result-block">
      <FilterSet @filterSearchResult="changeFilterCriteria" @changeRatingCriteria="changeOptedRating" />
      <SearchResult :filterKeys="filterCriteria" :ratingOption="ratingOption" :initialSearch="initialSearchResults" />
    </div>
    <div>
      <div v-if="showSearchPannel" class="custom-card text-black">
        <q-card-section>
          <div class="text-h6">Travel with <span class="colored-name">TRAVOLTA</span></div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed impedit doloribus odit deleniti assumenda veniam libero, veritatis neque totam, itaque, aliquid inventore ad tenetur quos. At laborum quas aperiam!
          Expedita porro nostrum distinctio dignissimos, maiores recusandae placeat quas nulla minus, sed voluptates vel similique eligendi qui labore commodi nisi reiciendis laboriosam. Adipisci sit eveniet numquam repellendus maiores inventore aspernatur.
          Doloribus, amet optio reiciendis suscipit facilis numquam debitis veritatis architecto porro, qui itaque ipsum velit nam nemo dolor iure vitae, animi rem fugiat, vel exercitationem impedit aperiam quis minima. Tempore.
          Quaerat, quod atque debitis ut culpa. Earum numquam deserunt doloribus vel facere qui perferendis assumenda soluta, possimus nulla mollitia repellendus magni impedit? Tempora impedit voluptates labore laborum similique perspiciatis dignissimos.
          Aliquid, at numquam perferendis, sed, in inventore nemo tenetur temporibus, officiis ad hic impedit dignissimos voluptatibus deserunt quaerat nam quos alias iusto maxime cumque libero aspernatur ullam ipsa qui. Deleniti.
        </q-card-section>
      </div>
    </div>
  </q-page>
</template>

<script>
import CompanySection from 'components/CompanySection.vue'
import SearchForm from 'components/SearchForm.vue'
import ButtonBlock from 'components/ButtonBlock.vue'
import FilterSet from 'components/FilterSet.vue'
import SearchResult from 'components/SearchResult.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  components: {
    CompanySection,
    SearchForm,
    ButtonBlock,
    FilterSet,
    SearchResult
  },
  data () {
    return {
      showSearchPannel: true,
      filterCriteria: null,
      ratingOption: null,
      initialSearchResults: null
    }
  },
  methods: {
    hideSearchPannel (value) {
      this.showSearchPannel = value
    },
    changeFilterCriteria (value) {
      this.filterCriteria = value
    },
    changeOptedRating (value) {
      if (this.ratingOption !== value) {
        this.ratingOption = value
      } else {
        this.ratingOption = null
      }
    },
    findWithCriteria (value) {
      setTimeout(() => {
        this.initialSearchResults = this.getHotels.filter(elem => elem.city.includes(value))
      }, 1000)
    }
  },
  computed: {
    ...mapGetters('searchData', ['getHotels'])
  }
}
</script>
<style lang="sass">
  .main-block
    display: flex
    flex-direction: column
    background-color: $grey-3
    border: 2px solid $grey-10
    padding: 2% 4%
    max-width: 100vw
  .up-block
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
  .search-form
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    border: 1px solid gray
    border-radius: 5px
    height: 16vh
    background-color: white
  .custom-card
    padding: 5px
  .colored-name
    color: $purple-13
  .result-block
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: flex-start
    width: 100%
    height: fit-content
    min-height: 100px
    border-radius: 5px
  @media(orientation: portrait)
    .search-form
      height: auto
      padding: 15px 0 15px
    .custom-card
      display: none
  @media(max-width: 812px)
    .custom-card
      display: none
  @media(max-width: 730px)
    .button-block-section
      display: none
</style>
