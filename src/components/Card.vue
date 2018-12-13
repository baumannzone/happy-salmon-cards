<template>
  <div class="card">
    <span class="user-color" :style="{background: bgColor}"></span>
    <h1 class="text">{{ text }}</h1>
    <span class="emoji">{{ emoji }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const text = ['Choca los 5!', 'Toque de Puños', '¡Cambio de río!', 'Happy Salmon']
const emojis = ['✋', '🤜🤛', '🔄', '🐟']
const colors = [ '#f44336', '#9c27b0', '#2196f3', '#00bcd4', '#cddc39', '#795548' ]
// const colors = [ '#ef9a9a', '#ce93d8', '#90caf9', '#80deea', '#e6ee9c', '#bcaaa4' ]

export default {
  name: 'Card',
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  computed: {
    ...mapGetters([ 'userId' ]),
    text () {
      return text[this.data.type]
    },
    emoji () {
      return emojis[this.data.type]
    },
    bgColor () {
      return colors[this.userId]
    }
  }
}
</script>

<style scoped lang="stylus">
  .card
    position relative
    padding 0 14px
    border-width 4px
    border-style solid
    border-color #eee
    border-radius 4px

    //.user-number
    //  position absolute
    //  left 0
    //  width 20px
    //  height 20px
    //  background #eee
    //  border-bottom-right-radius 3px
    //  font-weight bold
    //  color #999

    .user-color
      position absolute
      right 0
      bottom 0
      width 50px
      height 50px
      border-top-left-radius 50px
      font-weight bold
      color #999

    .text
      font-size 3.5rem

    .emoji
      font-size 5rem

</style>
