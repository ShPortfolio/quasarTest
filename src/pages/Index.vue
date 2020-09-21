<template>
  <q-page class="main-block">
    <div class="up-block">
      <div class="company-section">
       <CompanySection />
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
export default {
  name: 'PageIndex',
  components: {
    CompanySection,
    SearchForm
  }
}
</script>
<style lang="sass">
  .main-block
    display: flex
    flex-direction: column
    background-color: $grey-3

  .up-block
    display: flex
    flex-direction: row
    justify-content: space-between
</style>
