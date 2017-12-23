<template>
  <div>
    <h1>SVG Icon System</h1>
    <p>
      <icon-base><icon-write /></icon-base>
      <icon-base width="30" height="30"><icon-write /></icon-base> 
      These are inline icons
    </p>
    <p style="color:red">
      <icon-base><icon-moon /></icon-base> 
      These are red inline icons
    </p>
    <p>
      <icon-base><icon-calendar /></icon-base>
      <icon-base><icon-image /></icon-base>
      <icon-base><icon-write /></icon-base>
      <icon-base><icon-moon /></icon-base>
      <icon-base><icon-box /></icon-base>
    </p>
  </div>
</template>

<script>
import IconBase from './IconBase.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconImage from './icons/IconImage.vue'
import IconWrite from './icons/IconWrite.vue'
import IconMoon from './icons/IconMoon.vue'
import IconBox from './icons/IconBox.vue'

export default {
  components: {
    IconBase,
    IconCalendar,
    IconImage,
    IconWrite,
    IconMoon,
    IconBox
  }
}
</script>
