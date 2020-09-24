<template>
  <div id="adult" class="input-wrapper">
    <label for="AdultPicker"><span class="label-span">Adults</span></label>
    <q-input  outlined  v-model.number="adultNumber" type="number" filled :hint="value" name="AdultPicker" :dense="true" @click="changeHintNumber()" v-on:keyup="defineKey" min="0"/>
  </div>
</template>
<script>
export default {
  name: 'AdultPicker',
  data () {
    return {
      adultNumber: 1,
      pressedKey: null
    }
  },
  methods: {
    defineKey () {
      this.pressedKey = event.key
      this.triggerKeyEvent()
      this.setAdultSearch()
    },
    triggerKeyEvent () {
      if (this.activeKey === 0 || this.activeKey === 'ArrowUp' || this.activeKey === 'ArrowDown') {
        this.changeHintNumber()
      }
    },
    changeHintNumber () {
      setTimeout(() => {
        const target = document.getElementById('adult')
        const value = target.querySelector('INPUT').value
        if (value === '0' || '') {
          target.querySelector('.q-field__messages').style.color = 'red'
        }
      }, 800)
    },
    setAdultSearch () {
      this.$emit('changeNumber', this.runningAdultNumber)
    }
  },
  computed: {
    value () {
      if (this.adultNumber >= 1) {
        return 'enter number'
      } else {
        return 'at least one adult required'
      }
    },
    activeKey () {
      return this.pressedKey
    },
    runningAdultNumber () {
      return this.adultNumber
    }
  }

}
</script>
<style lang="sass" scoped>
.q-field--dense .q-field__label
  top: -25px
.input-wrapper
  width: 45%
@media(orientation: portrait)
  .input-wrapper
    width: 49%
    margin: 5px 0
  .input-wrapper
    .label-span
      margin: 0 0 0 10px
</style>
