<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers :servers="servers"
               @changeId="changeId"></servers>
      <app-server-details :servers="servers"
                          :serverId="serverId"
                          @changeStatus="changeStatus"></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

export default {
  data () {
    return {
      servers: [
        { id: 1, status: 'Normal' },
        { id: 2, status: 'Unknow' },
        { id: 3, status: 'Critical' },
        { id: 4, status: 'Normal' },
      ],
      serverId: 0
    }
  },
  components: {
    appHeader: Header,
    Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer
  },
  methods: {
    changeId (index) {
      this.serverId = index
    },
    changeStatus (index) {
      this.servers[index].status = 'Normal'
    }
  }
}
</script>

<style>
</style>
