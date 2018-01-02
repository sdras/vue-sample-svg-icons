<template>
  <svg @click="startScissors"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100"
    width="100" 
    height="100" 
    aria-labelledby="scissors"
    role="presentation"
    >
    <title id="scissors" lang="en">Scissors Animated Icon</title>
    <path id="bk" fill="#fff" d="M0 0h100v100H0z"/>
    <g ref="leftscissor">
      <path d="M57.6 47h-8.7v4.7H53l1.5 45h1.1a24.9 24.9 0 0 0 2-49.7zm1.5 45l-1.5-40.4a20.3 20.3 0 0 1 18.3 20.2c0 10.5-6.5 19.2-16.8 20.2z" fill="#30374b"/>
      <path d="M53.9 50.7l1.5 45.1h.2a24 24 0 0 0 1.9-47.9h-8v2.9zm3.8 0a21.1 21.1 0 0 1 19.1 21.1c0 11.4-7.2 20.1-17.6 21.1h-.9l-1.6-42.3z" fill="none"/>
      <path d="M75 71.8a19.3 19.3 0 0 0-16.5-19.2L60 91c8.9-1.3 15-9.1 15-19.2z" fill="none"/>
      <path d="M59.2 92.9c10.4-1 17.6-9.7 17.6-21.1a21.1 21.1 0 0 0-19.1-21.1h-1L58.3 93zM75 71.8c0 10.1-6.1 17.9-15 19.2l-1.5-38.4A19.3 19.3 0 0 1 75 71.8z" fill="#7f756b"/>
      <path d="M58.5 46.2V46h-9v1.8h8a24 24 0 0 1-1.9 47.9h-.2l-1.5-45h-4.4v1.8h2.7l1.5 45h1.9a25.8 25.8 0 0 0 2.9-51.4z" fill="#7f756b"/>
      <path fill="#a2a1a2" d="M54.6 51.3l.6-49.1-9.6 49.1h9z"/>
      <path d="M55.5 52.1H44.6L54.3 2l1.8.2zm-8.8-1.7h7l.5-38.5z" fill="#7f756b"/>
    </g>
    <g ref="rightscissor">
      <path d="M42.3 46.9a24.9 24.9 0 0 0 0 49.8h1l1.6-45h4v-4.8zM38.8 92C28.5 91 22 82.3 22 71.8a20.3 20.3 0 0 1 18.3-20.2z" fill="#30374b"/>
      <path d="M18.3 71.8a24 24 0 0 0 24 24h.2L44 50.7h5.5v-2.9h-7.2a23.9 23.9 0 0 0-24 24zM39.6 93h-.9c-10.4-1-17.6-9.7-17.6-21.1a21.1 21.1 0 0 1 19.1-21.2h1z" fill="none"/>
      <path d="M22.9 71.8c0 10.1 6.1 17.9 15 19.2l1.5-38.4a19.3 19.3 0 0 0-16.5 19.2z" fill="none"/>
      <path d="M21.1 71.8c0 11.4 7.2 20.1 17.6 21.1h.9l1.6-42.4h-1a21.1 21.1 0 0 0-19.1 21.3zM37.9 91c-8.9-1.3-15-9.1-15-19.2a19.3 19.3 0 0 1 16.5-19.2z" fill="#7f756b"/>
      <path d="M44 50.7l-1.5 45.1h-.2a24 24 0 0 1 0-48h7.2V46h-7.2a25.8 25.8 0 0 0 0 51.6h1.9l1.5-45h3.8v-1.9z" fill="#7f756b"/>
      <path fill="#d3d9df" d="M43.2 51.3l-.6-49.1 9.5 49.1h-8.9z"/>
      <path d="M53.2 52.1H42.3l-.6-49.9 1.7-.2zm-9.1-1.7h7l-7.5-38.5z" fill="#7f756b"/>
    </g>
    <circle cx="48.6" cy="44.5" r="3.7" fill="#e5e8ec"/>
    <path d="M48.6 49.1a4.6 4.6 0 1 1 0-9.1 4.6 4.6 0 0 1 0 9.1zm0-7.4a2.8 2.8 0 0 0-2.8 2.8 2.7 2.7 0 0 0 2.8 2.8 2.8 2.8 0 0 0 2.8-2.8 2.9 2.9 0 0 0-2.8-2.8z" fill="#7f756b"/>
  </svg>
</template>

<script>
import { TweenMax, Sine } from 'gsap'

export default {
  methods: {
    startScissors() {
      this.scissorAnim(this.$refs.rightscissor, 30)
      this.scissorAnim(this.$refs.leftscissor, -30)
    },
    scissorAnim(el, rot) {
      TweenMax.to(el, 0.25, {
        rotation: rot,
        repeat: 3,
        yoyo: true,
        svgOrigin: '50 45',
        ease: Sine.easeInOut
      })
    }
  }
}
</script>

<style scoped>

</style>