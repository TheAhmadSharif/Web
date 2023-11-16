<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <RequestStatus/>
    <AddPlayer/>
    <ListPlayers/>
    <SelectedPlayer/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import AddPlayer from './components/AddPlayer.vue';
import ListPlayers from './components/ListPlayers.vue';
import SelectedPlayer from './components/SelectedPlayer.vue';
import RequestStatus from './components/RequestStatus.vue';

const api = 'https://dummyjson.com/products'

export default {
  components: {
    AddPlayer,
    ListPlayers,
    SelectedPlayer,
    RequestStatus
  },
 data() {
    return {
      loading: false,
      post: null,
      error: null,
    }
  },
  created() {

  },
 methods: {
   getemit(id) {
      console.log(id, '___ 22 Emit')
    },
    fetchData() {
      this.error = this.post = null
      this.loading = true
    },
  },
 watch:{
      'player_id'(){
        this.player_id = this.player_id + 4;
 
      }
  }
}

</script>