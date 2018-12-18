<template>
  <div class="cards">
    <div class="grid-container">
      <template v-for="(data, idx) in cards">
        <Card :data="data" :key="idx"/>
      </template>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Cards',
  components: {
    Card
  },
  data () {
    return {
      cards: [
        { type: 0 },
        { type: 0 },
        { type: 0 },
        { type: 1 },
        { type: 1 },
        { type: 1 },
        { type: 2 },
        { type: 2 },
        { type: 2 },
        { type: 3 },
        { type: 3 },
        { type: 3 }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .cards
    position relative
    padding-left 15px

  .grid-container
    display grid
    grid-template-columns repeat(3, 300px)
    grid-template-rows repeat(4, 440px)
    grid-column-gap 50px
    grid-row-gap 50px
</style>
