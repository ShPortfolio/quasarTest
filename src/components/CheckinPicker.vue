<template>
  <div>
    <q-input outlined v-model="text" label="Outlined" dense="true" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
