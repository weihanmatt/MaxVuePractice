<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
    <p>User Age: {{userAge}}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  name: '',
  props: {
    name: String,
    resetFn: Function,
    userAge: Number
  },
  methods: {
    resetName () {
      this.name = 'max'
      this.$emit('nameWasReset', this.name)
    }
  },
  data () {
    return {

    }
  },
  components: {

  },
  created () {
    eventBus.$on('ageChanged', (age) => {
      this.userAge = age;
    })
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
