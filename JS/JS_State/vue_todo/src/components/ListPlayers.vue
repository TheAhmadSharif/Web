<!-- 
  Student instructions: 

  1. Create a ul element with an id of "players-list", and use template logic to iterate over the players prop and render the ListPlayer component for each player in the list.

  2. In the ListPlayer component, bind an event listener, so that when the player-clicked event is emitted, it calls the getPlayer prop function with the id of the clicked player as an argument.

  3. The component should be passed players and getPlayer function from its parent component as props. And make sure that the ListPlayer component is used by the ListPlayers component 
-->


<template>
  <div>
    <h2>List of players</h2>
    TODO: ListPlayers

    <div>
      <ul id="players-list">
        <ListPlayer v-for="obj in playerlist" 
        :id="obj.id"
        :key="obj.id"
        :name="obj.name"
        @click="getPlayer(obj.id)"
        />
      </ul>
      
    </div>
    
    <SelectedPlayer v-if="visibility == true" :player_id="playerid"/>
  </div>
</template>

<script>
import SelectedPlayer from './SelectedPlayer.vue' 
import ListPlayer from './ListPlayer.vue';

const api = 'http://localhost:3001/'

export default {
  props: ['player_id'],
  data() {
    return {
      playerlist: [],
      visibility: false,
      playerid: null
    }
  },
  methods: {
    getPlayer(id) {
      this.visibility = true;
      this.playerid = id;
      console.log(id)
    }
  },
  components: {
    ListPlayer,
    SelectedPlayer
  },
  mounted () {
      fetch(`${api}api/players`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
         this.playerlist = data

      })

  }
};
</script>

<style scoped>
#players-list {
  list-style: none;
  margin: var(--main-margin);
  padding: 20px;
  background-color: var(--color-background-soft);
}


</style>