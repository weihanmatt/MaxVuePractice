<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
    <h1>{{servers[serverId].status}}</h1>
    <button @click="changeStatus">Change Status to Normal</button>
  </div>

</template>

<script>
export default {
  props: {
    serverId: Number,
    servers: Array
  },
  methods: {
    changeStatus () {
      this.$emit('changeStatus', this.serverId)
    }
  }
}
</script>

<style>
</style>
