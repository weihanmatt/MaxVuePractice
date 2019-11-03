<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name</button>
    <p>the name is : {{name}}</p>
    <p>the age is : {{age}}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <user-detail :name="name"
                     @nameWasReset="name=$event"
                     :resetFn="resetName"
                     :userAge="age"></user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <user-edit :userAge="age"
                   @ageChanged="age = $event"
                   :changeAgeFn="resetAge"></user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail'
import UserEdit from './UserEdit'
export default {
  name: '',
  data () {
    return {
      name: 'Matt',
      age: '27'
    }
  },
  methods: {
    changeName () {
      this.name = 'King'
    },
    resetName () {
      this.name = 'reset'
    },
    resetAge () {
      this.age = 33
    }
  },
  components: {
    userDetail: UserDetail,
    userEdit: UserEdit
  }
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
