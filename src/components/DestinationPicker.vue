<template>
  <div id="destination" class="input-wrapper">
    <div v-show="search" class="autocopmleteList" :class="{'hidden': alreadyOpted}">
      <div @click="optCityFromList(item.name)" class="cityItem" v-for="item in deduplicatedValue" :key="item.id">{{ item.name }}</div>
    </div>
    <label for="DestinationPicker"><span class="label-span">Destination</span></label>
    <q-input outlined v-model="search" autocomplete="off" name="DestinationPicker"  filled type="search" :hint="hintMessage" :dense="true" v-on:keyup="checkInputLanguage">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
export default {
  data () {
    return {
      search: null,
      hintMessage: 'Search',
      alreadyOpted: false
    }
  },
  methods: {
    checkInputLanguage () {
      this.alreadyOpted = false
      if (!this.runningSearchValue.match(/^[a-zA-Z]*$/)) {
        this.hintMessage = 'try enlgish layout'
        setTimeout(() => {
          const target = document.getElementById('destination')
          target.querySelector('.q-field__messages').style.color = 'red'
        }, 1000)
      } else {
        this.hintMessage = 'Search'
        setTimeout(() => {
          const target = document.getElementById('destination')
          target.querySelector('.q-field__messages').style.color = 'rgba(0, 0, 0, 0.54)'
        }, 1000)
      }
    },
    optCityFromList (value) {
      this.search = value
      this.alreadyOpted = true
      this.$emit('setDestination', value)
    }
  },
  computed: {
    ...mapGetters('searchData', ['getDestination']),
    ...mapGetters('searchData', ['getHotels']),
    showRunningValue () {
      if (this.search) {
        return this.getDestination.filter((elem) => elem.name.toLowerCase().includes(this.search.toLowerCase()))
      } else {
        return ''
      }
    },
    runningSearchValue () {
      return this.search
    },
    deduplicatedValue () {
      return _.uniqBy(this.showRunningValue, 'name')
    }
  }
}
</script>
<style scoped lang="sass">
.input-wrapper
  position: relative
.autocopmleteList
  display: flex
  position: absolute
  flex-direction: column
  align-items: flex-start
  width: 100%
  min-height: fit-content
  max-height: fit-content
  top: 65px
  background-color: $grey-3
  border-radius: 5px
.cityItem:not(:first-child)
  margin-top: 2px
.cityItem
  display: flex
  justify-content: flex-start
  align-items: center
  height: 40px
  min-height: 40px
  width: 100%
  background-color: white
  padding-left: 15px
  border-radius: 5px
  z-index: 1
.cityItem:hover
  background-color: $grey-2
@media (orientation: portrait)
  .input-wrapper
    width: 100%
    margin: 5px 0
  .input-wrapper
    height: 20vh
    .label-span
      margin: 0 0 0 10px
  .autocopmleteList
    max-height: 100%
    overflow-y: scroll
</style>
