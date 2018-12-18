<template>
  <div class="home">
    <select v-model="selected" @change="setPlayer()">
      <option v-for="n in options" :key="n" :value="n">{{ n+1 }}</option>
    </select>
    <br> <br>
    <Cards/>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    Cards
  },
  data () {
    return {
      selected: 0
    }
  },
  computed: {
    ...mapGetters([ 'userId' ]),
    options () {
      return [ 0, 1, 2, 3, 4, 5 ]
    }
  },
  methods: {
    setPlayer () {
      this.$store.dispatch('setPlayerId', this.selected)
    }
  }
}
</script>
