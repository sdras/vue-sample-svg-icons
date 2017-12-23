<template>
   <section>
      <h2>Animated Icons</h2>
      <p>Click on the icons below</p>
      <icon-scissors />
      <icon-heart-face />
    </section>
</template>

<script>
import IconScissors from './animatedicons/IconScissors.vue'
import IconHeartFace from './animatedicons/IconHeartFace.vue'

export default {
  components: {
    IconScissors,
    IconHeartFace
  }
}
</script>

<style scoped>
svg {
  cursor: pointer;
}
</style>