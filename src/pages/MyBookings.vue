<template>
  <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <ButtonBlock :notSearchPage="true"/>
      <q-card-section>
        <div class="text-h6">Previous search requests</div>
      </q-card-section>

      <q-card-section class="q-pt-none request-section" v-if="getPreviousSearchObj.length">
        <div class="previousSearchRequests" v-for="item in getPreviousSearchObj" :key="item.id">
          <div class="destination">Destination: {{item.searchObject.destination}}</div>
          <div class="checkin">Checkin Date: {{item.searchObject.checkin}}</div>
          <div class="checkout">Checkout Date: {{item.searchObject.checkout}}</div>
          <div class="adultNumber">Adult: {{item.searchObject.adultNumber}}</div>
          <div class="childrenNumber">Children: {{item.searchObject.childrenNumber}}</div>
          <q-btn class="delete-button" label="Delete search" @click="deleteSearchObjectInDb(item.id)"/>
        </div>
      </q-card-section>
      <div v-else>There was no searches before</div>
       <q-separator />
        <q-card-actions horisontal>
         <q-btn @click="showRequests" style="border: 1px solid white" flat>Show Previous Search requests</q-btn>
        </q-card-actions>
    </q-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ButtonBlock from 'components/ButtonBlock.vue'
import axios from 'axios'
export default {
  components: {
    ButtonBlock
  },
  methods: {
    ...mapActions({
      showRequests: 'searchData/getPreviousSearchCriteria'
    }),
    async deleteSearchObjectInDb (id) {
      console.log(id)
      axios.delete(`http://localhost:3000/Search-criteria/${id}`)
        .then(response => {
          this.showRequests()
        })
    }
  },
  computed: {
    ...mapGetters('searchData', ['getPreviousSearchObj'])
  }
}
</script>
<style lang="sass">
  a
    text-decoration: none
    color: white
    border: 1px solid white
    border-radius: 5px
  .request-section
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
  .delete-button
    border: 1px solid white
</style>
