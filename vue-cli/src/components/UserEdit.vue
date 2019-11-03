<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>age: {{userAge}}</p>
    <button @click="editAge">Edit Age</button>
    <button @click="changeAgeFn()">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  name: '',
  props: {
    userAge: Number,
    changeAgeFn: Function
  },
  data () {
    return {

    }
  },
  methods: {
    editAge () {
      this.userAge = 30
      // this.$emit('ageChanged', this.userAge)
      // eventBus.$emit('ageChanged', this.userAge)
      eventBus.changeAge(this.userAge)
    }
  },
  components: {

  }
}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
