<template>
  <section>
    <h2>Regular Icons</h2>
    <p>
      <!--you can pass in a smaller width and height as props-->
      <icon-base width="12" height="12"><icon-write /></icon-base> 
      <!--or you can use the default, which is 18-->
      <icon-base><icon-write /></icon-base>
      <!--or make it a little bigger too :) -->
      <icon-base width="30" height="30"><icon-write /></icon-base> 
      These are inline icons
    </p>
    <p style="color:red">
      <!--you can change the color of the text, and the icons will automatically change color as well-->
      <icon-base><icon-moon /></icon-base> 
      These are red inline icons
    </p>
    <p>
      <!--because the base is consistent, you can use multiple icons on the same line and they're all in order-->
      <icon-base><icon-calendar /></icon-base>
      <icon-base><icon-image /></icon-base>
      <icon-base><icon-write /></icon-base>
      <icon-base><icon-moon /></icon-base>
      <icon-base><icon-box /></icon-base>
    </p>
  </section>
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
