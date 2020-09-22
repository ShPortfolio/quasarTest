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
    <div class="search-form">
      <SearchForm />
    </div>
  </q-page>
</template>

<script>
import CompanySection from 'components/CompanySection.vue'
import SearchForm from 'components/SearchForm.vue'
import ButtonBlock from 'components/ButtonBlock.vue'

export default {
  name: 'PageIndex',
  components: {
    CompanySection,
    SearchForm,
    ButtonBlock
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
</style>
