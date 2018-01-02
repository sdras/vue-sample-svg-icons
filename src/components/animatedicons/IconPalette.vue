<template>
  <svg 
    @click="movePalette"
    xmlns="http://www.w3.org/2000/svg" 
    width="100" 
    height="100" 
    viewBox="0 0 100 100"
    aria-labelledby="palette"
    role="presentation"
    >
    <title id="palette" lang="en">Animated Color palette</title>
    <path id="bk" fill="#fff" d="M0 0h100v100H0z"/>
    <g id="palette">
      <g ref="dark">
        <path transform="rotate(-64.1 71.508 54.997)" fill="#fff" d="M33.3 42.8h76.3v24.23H33.3z"/>
        <path d="M65 93.5L41.8 82.2l33.9-70L99 23.5zm-21.1-12l20.4 9.9 32.5-67.2-20.3-9.9z" fill="#7f746b"/>
        <path transform="rotate(-64.1 81.575 30.396)" fill="#577f7c" d="M72.5 21.4h18.1v18.05H72.5z"/>
        <path transform="rotate(-64.1 72.191 49.644)" fill="#426662" d="M63.2 40.6h18.1v18.06H63.2z"/>
        <path transform="rotate(-64.1 62.888 68.943)" fill="#375954" d="M53.8 59.9h18.1v18.05H53.8z"/>
      </g>
      <g ref="med">
        <path transform="rotate(-78.9 57.558 49.808)" fill="#fff" d="M19.4 37.7h76.3v24.23H19.4z"/>
        <path d="M61.1 88.7l-25.3-5 15-76.4 25.4 5zm-23.4-6.2l22.2 4.3 14.4-73.2-22.2-4.4z" fill="#7f746b"/>
        <path transform="rotate(-78.9 61.042 23.53)" fill="#88bcbc" d="M52 14.5h18.1v18.05H52z"/>
        <path transform="rotate(-78.9 56.93 44.502)" fill="#78a8a7" d="M47.9 35.5H66v18.05H47.9z"/>
        <path transform="rotate(-78.9 52.758 65.425)" fill="#659391" d="M43.8 56.4h18.1v18.05H43.8z"/>
      </g>
      <g ref="light">
        <path fill="#fff" d="M28 9.6h24.2v76.25H28z"/>
        <path d="M51.2 85.2H25.3V7.4h25.9zm-24.3-1.6h22.6V9H26.9z" fill="#7f746b"/>
        <path fill="#a2dade" d="M29.5 12.2h18.1v18.05H29.5z"/>
        <path fill="#ade8ea" d="M29.5 33.6h18.1v18.05H29.5z"/>
        <path fill="#d0fcfb" d="M29.5 55h18.1v18.05H29.5z"/>
      </g>
    </g>
    <g ref="pen">
      <path transform="rotate(-54.1 25.93 61.88)" fill="#a2dade" d="M-7.7 59.1h67.2v5.53H-7.7z"/>
      <path d="M8.3 91.8l-5.4-3.9 40-55.3 5.3 3.8zm-3.9-4.1L8 90.3l38.7-53.6-3.6-2.6z" fill="#7f746b"/>
      <path d="M35.6 53.1l11.9-16.5-4.5-3.3-11.9 16.5z" fill="#fff"/>
      <path d="M30.3 49.9l12.6-17.3 5.3 3.8-12.5 17.4-.4-.3-4.5-3.2zm12.8-15.8L31.8 49.7l3.6 2.6 11.3-15.6z" fill="#7f746b"/>
      <path transform="rotate(-54.2 4.844 91.005)" fill="#fff" d="M2.9 89.2h4v3.71h-4z"/>
      <path d="M5.3 94.5l-3.9-2.8 3-4.1 3.9 2.8zm-2.4-3L5.1 93l1.7-2.3-2.2-1.6z" fill="#7f746b"/>
      <path transform="rotate(-54.1 40.524 34.025)" fill="#7f746b" d="M39.9 32.9H41v2.24h-1.1z"/>
      <path transform="rotate(-54.1 30.624 47.611)" fill="#7f746b" d="M30.1 46.5h1.1v2.24h-1.1z"/>
      <path transform="rotate(-54.1 34.768 40.221)" fill="#7f746b" d="M25.9 39.7h17.8v1.08H25.9z"/>
    </g>
  </svg>
</template>

<script>
import { TimelineMax, Sine, Back } from 'gsap'

export default {
  methods: {
    movePalette() {
      const tl = new TimelineMax()

      //pick up here
      tl.add('start')
      this.mPalette(tl, this.$refs.light, -5)
      this.mPalette(tl, this.$refs.med, -15)
      this.mPalette(tl, this.$refs.dark, -25)
      tl.to(
        this.$refs.pen,
        0.6,
        {
          rotation: 20,
          x: 20,
          transformOrigin: '50% 50%',
          ease: Back.easeOut
        },
        'start'
      )
      this.mPBack(tl, this.$refs.light)
      this.mPBack(tl, this.$refs.med)
      this.mPBack(tl, this.$refs.dark)
      tl.to(
        this.$refs.pen,
        0.4,
        {
          rotation: 0,
          x: 0,
          transformOrigin: '50% 50%',
          ease: Sine.easeIn
        },
        'start+=0.7'
      )
    },
    mPalette(tl, el, rot) {
      tl.to(
        el,
        0.6,
        {
          rotation: rot,
          x: 5,
          svgOrigin: '49 82',
          ease: Back.easeOut
        },
        `start`
      )
    },
    mPBack(tl, el) {
      tl.to(
        el,
        0.4,
        {
          rotation: 0,
          x: 0,
          svgOrigin: '49 82',
          ease: Sine.easeIn
        },
        `start+=0.7`
      )
    }
  }
}
</script>