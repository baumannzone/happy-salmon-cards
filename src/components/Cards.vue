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
        { text: 'Choca los 5!', type: 0 },
        { text: 'Choca los 5!', type: 0 },
        { text: 'Choca los 5!', type: 0 },
        { text: 'Toque de Puños', type: 1 },
        { text: 'Toque de Puños', type: 1 },
        { text: 'Toque de Puños', type: 1 },
        { text: '¡Cambio de río!', type: 2 },
        { text: '¡Cambio de río!', type: 2 },
        { text: '¡Cambio de río!', type: 2 },
        { text: 'Happy Salmon', type: 3 },
        { text: 'Happy Salmon', type: 3 },
        { text: 'Happy Salmon', type: 3 }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .grid-container
    display grid
    grid-template-columns repeat(3, 300px)
    grid-template-rows repeat(4, 430px)
    grid-column-gap 50px
    grid-row-gap 50px
</style>
