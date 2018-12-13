<template>
  <div class="home">
    <select v-model="selected" @change="setUser()">
      <option v-for="n in options" :key="n" :value="n">{{ n+1 }}</option>
    </select>
    <hr>
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
    ...mapGetters(['userId']),
    options () {
      return [0, 1, 2, 3, 4, 5]
    }
  },
  methods: {
    setUser () {
      console.debug(this.selected - 1)
      this.$store.dispatch('setUserId', this.selected)
    }
  }
}
</script>
