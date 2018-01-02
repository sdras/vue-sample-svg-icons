<template>
  <svg 
    @click="makeHeart"
    xmlns="http://www.w3.org/2000/svg" 
    width="100" 
    height="100" 
    viewBox="0 0 120 120"
    aria-labelledby="heartface"
    role="presentation"
    >
    <title id="heartface" lang="en">Smiley face that turns into heart eyes</title>
    <defs>
      <linearGradient id="linear-gradient" x1="55.09" y1="8.79" x2="55.09" y2="95.5" gradientTransform="matrix(1 0 0 -1 10 112)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#f9a65d"/>
        <stop offset="1" stop-color="#fcd25c"/>
      </linearGradient>
    </defs>
    <path ref="bk" fill="#fff" d="M0 0h120v120H0z"/>
    <g ref="originalface">
      <circle cx="65.1" cy="59.9" r="43.4" fill="url(#linear-gradient)"/>
      <path d="M49.5 94.6a44.8 44.8 0 1 1 44.8-44.7 44.8 44.8 0 0 1-44.8 44.7zm0-86.7a42 42 0 1 0 42 42 42 42 0 0 0-42-42z" transform="translate(10 10)" fill="#7f756b"/>
      <g ref="eyes" fill="#7f756b">
        <circle cx="41.5" cy="52" r="5.6"/>
        <circle cx="78.5" cy="52" r="5.6"/>
      </g>
      <g ref="blush" fill="#f15e58">
        <circle cx="80.7" cy="71.8" r="7.9" style="isolation:isolate" opacity=".5"/>
        <circle cx="39.4" cy="70.6" r="7.9" style="isolation:isolate" opacity=".5"/>
      </g>
      <path d="M49.6 67.2h-.8c-9.6-.3-15.7-4.9-15.6-11.8h2.7c0 6.4 7 8.9 13 9 7.6.3 16-3 16.3-8.6h2.7c-.3 7.3-9.4 11.4-18.3 11.4z" transform="translate(10 10)" fill="#7f756b" id="sm-mouth"/>
    </g>
    <g ref="heartface" id="heartface">
      <g ref="hearteyes">
        <path d="M30.6 21.8h-1.5c-3.8 0-5.6 1.7-7.6 4.1-2.1-2.4-3.9-4.1-7.6-4.1h-1.5c-3.3.3-7 3.3-7.5 9v1.9c.4 5.4 4.5 12.1 16.6 20.6 12-8.5 16.1-15.2 16.5-20.6v-1.9c-.5-5.7-4.2-8.7-7.4-9z" transform="translate(10 10)" fill="#e54242"/>
        <path d="M21.5 55l-.8-.6C9.7 46.7 4.1 39.6 3.5 32.8v-2c.6-6.5 4.9-9.9 8.7-10.3s7.2 1.2 9.3 3.3c2-2.1 4.4-3.7 9.2-3.3s8.2 3.8 8.7 10.3v2c-.5 6.8-6.1 13.9-17.1 21.6zM6.3 32.6c.5 5.7 5.6 12.1 15.2 19 9.5-6.9 14.6-13.3 15.1-19v-1.8c-.4-4.8-3.5-7.3-6.2-7.6s-5.5.7-7.9 3.5l-1 1.3-1.1-1.3c-2.4-2.8-3.9-3.9-7.9-3.5S6.7 26 6.3 30.8z" transform="translate(10 10)" fill="#7f756b"/>
        <g>
          <path d="M89.2 21.8h-1.5c-3.8 0-5.6 1.7-7.6 4.1-2.1-2.4-3.9-4.1-7.6-4.1H71c-3.3.3-7 3.3-7.5 9v1.9c.4 5.4 4.5 12.1 16.6 20.6 12-8.5 16.1-15.2 16.5-20.6v-1.9c-.5-5.7-4.2-8.7-7.4-9z" transform="translate(10 10)" fill="#e54242"/>
          <path d="M80.1 55l-.8-.6c-11-7.7-16.6-14.8-17.2-21.6v-2c.5-6.5 4.9-9.9 8.7-10.3a10.5 10.5 0 0 1 9.3 3.3c2-2.1 4.5-3.7 9.2-3.3s8.2 3.8 8.7 10.3v2c-.5 6.8-6.1 13.9-17.1 21.6zM64.9 32.6c.5 5.7 5.6 12.1 15.2 19 9.5-6.9 14.6-13.3 15.1-19v-1.8c-.4-4.8-3.5-7.3-6.2-7.6h-1.3c-3.1 0-4.5 1.1-6.6 3.6l-1 1.3-1.1-1.4c-2.1-2.5-3.5-3.6-6.5-3.6h-1.4c-2.7.3-5.8 2.8-6.2 7.6v1.8z" transform="translate(10 10)" fill="#7f756b"/>
        </g>
      </g>
      <g ref="openmouth">
        <path d="M30.8 54.7a18.7 18.7 0 0 0 37.4 0A22.8 22.8 0 0 0 68 52H31a11.8 11.8 0 0 0-.2 2.7z" transform="translate(10 10)" fill="#493f3c"/>
        <path d="M50 59l17.6.2a16.8 16.8 0 0 0 .6-4.5A22.8 22.8 0 0 0 68 52H31a11.8 11.8 0 0 0-.2 2.7 18.4 18.4 0 0 0 .4 4.1z" transform="translate(10 10)" fill="#fff"/>
        <path d="M62 68.6a18 18 0 0 0-24.5.4 18.6 18.6 0 0 0 12 4.4A19 19 0 0 0 62 68.6z" transform="translate(10 10)" fill="#e54242"/>
        <path d="M49.5 74.8a20.2 20.2 0 0 1-20.1-20.1 15.2 15.2 0 0 1 .2-2.9l.2-1.2h39.4l.2 1.2c.1 1.1.2 2 .2 2.9a20.2 20.2 0 0 1-20.1 20.1zM32.2 53.4v1.3a17.3 17.3 0 0 0 34.6 0v-1.3z" transform="translate(10 10)" fill="#7f756b"/>
      </g>
    </g>
</svg>

</template>

<script>
import { TweenMax, TimelineMax, Sine } from 'gsap'

export default {
  methods: {
    makeHeart() {
      TweenMax.set(this.$refs.heartface, {
        visibility: 'visible'
      })

      const tl = new TimelineMax()

      tl.add('start')
      tl.fromTo(
        this.$refs.eyes,
        0.1,
        {
          scaleY: 1,
          transformOrigin: '50% 50%;'
        },
        {
          scaleY: 0,
          transformOrigin: '50% 50%;',
          repeat: 3,
          yoyo: true,
          ease: Sine.easeInOut
        },
        'start'
      )
      tl.fromTo(
        [this.$refs.blush, this.$refs.eyes],
        0.3,
        {
          y: 0
        },
        {
          y: -5,
          ease: Sine.easeOut
        },
        'start'
      )
      tl.fromTo(
        this.$refs.heartface,
        0.3,
        {
          opacity: 0
        },
        {
          opacity: 1,
          ease: Sine.easeOut
        },
        'start+=0.3'
      )
      tl.from(
        this.$refs.openmouth,
        0.2,
        {
          scaleY: 0,
          ease: Sine.easeOut
        },
        'start+=0.3'
      )
      tl.from(
        this.$refs.hearteyes,
        0.2,
        {
          rotation: 10,
          repeat: 4,
          yoyo: true,
          transformOrigin: '50% 50%',
          ease: Sine.easeOut
        },
        'start+=0.3'
      )
      tl.to(
        this.$refs.heartface,
        0.1,
        {
          opacity: 0,
          ease: Sine.easeIn
        },
        'start+=1.1'
      )
      tl.fromTo(
        this.$refs.eyes,
        0.1,
        {
          scaleY: 1,
          transformOrigin: '50% 50%;'
        },
        {
          scaleY: 0,
          transformOrigin: '50% 50%;',
          repeat: 3,
          yoyo: true,
          ease: Sine.easeInOut
        },
        'start+=1.1'
      )
      tl.to(
        [this.$refs.blush, this.$refs.eyes],
        0.3,
        {
          y: 0,
          ease: Sine.easeIn
        },
        'start+=1.1'
      )
    }
  }
}
</script>

<style scoped>
#heartface {
  visibility: hidden;
}
</style>