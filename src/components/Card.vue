<template>
  <div class="card" :style="{borderColor: bgColor}">
    <span class="user-color" :style="{background: bgColor}"></span>
    <h1 class="text">{{ text }}</h1>
    <span class="emoji">{{ emoji }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const emojis = ['✋', '🤜🤛', '🔄', '🐟']
const colors = [ 'orange', 'yellow', 'green', 'blue', 'cyan', 'purple' ]

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
      return this.data.text
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
      background-image url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 920 1750' x='0px' y='0px'%3E %3Cpath style='fill: rgba(67, 217, 184, 0.25)")
      border-top-left-radius 50px
      font-weight bold
      color #999

    .text
      font-size 3.5rem

    .emoji
      font-size 5rem

</style>
