<template>
  <div class="card">
    <div class="user-color" :style="{background: bgColor}">
      <div class="user-color-bar" :style="{background: bgColor}"></div>
    </div>
    <div class="user-number">{{ userId + 1 }}</div>
    <h1 class="text">{{ text }}</h1>
    <i class="icon" :class="icons"></i>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const text = ['¡Choca los 5!', 'Toque de Puños', '¡Cambio de río!', 'Happy Salmon']
const emojis = ['✋', '🤜🤛', '🔄', '🐟']
const colors = [ '#f44336', '#9c27b0', '#2196f3', '#4caf50', '#cddc39', '#795548' ]
// #red #purple #blue #green #lime #brown

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
    icons () {
      if (this.data.type === 0) {
        return 'far fa-hand-paper'
      } else if (this.data.type === 1) {
        return 'far fa-hand-rock fa-rotate-90'
      } else if (this.data.type === 2) {
        return 'fas fa-exchange-alt'
      } else {
        return 'fas fa-fish'
      }
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

    .user-number
      position absolute
      left 0
      width 20px
      height 20px
      background #eee
      border-bottom-right-radius 3px
      font-weight bold
      color #999

    .user-color
      display block
      position absolute
      right 0
      bottom 0
      width 50px
      height 50px
      border-top-left-radius 50px
      font-weight bold
      color #999
    .user-color-bar
      position absolute
      right 0
      bottom 0
      width 292px
      height 8px

    .text
      font-size 3.5rem

    .emoji,
    .icon
      font-size 6rem

</style>
