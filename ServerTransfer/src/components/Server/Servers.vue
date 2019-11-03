<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item"
          v-for="(server,index) in servers"
          :key="server.id"
          @click="changeServer(index)">
        Server #{{ server.id }} {{server.status}}
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  props: {
    servers: Array
  },
  data: function () {
    return {

    }
  },
  methods: {
    changeServer (index) {
      this.$emit('changeId', index)
    }
  }
}
</script>

<style>
</style>
