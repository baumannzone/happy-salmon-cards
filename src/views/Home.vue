<template>
  <div class="home">
    <!--Select user 1-6-->
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <Cards/>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'

export default {
  name: 'home',
  components: {
    Cards
  }
}
</script>
