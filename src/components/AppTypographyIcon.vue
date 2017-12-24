<template>
  <section>
    <h2>Regular Icons</h2>
    <p class="info">All found on <a href="https://icomoon.io/" target="_blank">Icomoon</a>, using the Vicons set</p>
    <p>
      <!--you can pass in a smaller width and height as props-->
      <icon-base width="12" height="12"><icon-write /></icon-base> 
      <!--or you can use the default, which is 18-->
      <icon-base><icon-write /></icon-base>
      <!--or make it a little bigger too :) -->
      <icon-base width="30" height="30"><icon-write /></icon-base>
      <br>
      You can make inline icons of any size by passing props.
    </p>
    <p style="color:red">
      <!--you can change the color of the text, and the icons will automatically change color as well-->
      <icon-base><icon-moon /></icon-base>
      These red inline icons are automatically styled according to the text color.
    </p>
    <p>
      <!--because the base is consistent, you can use multiple icons on the same line and they're all in order-->
      <icon-base><icon-box /></icon-base>
      <icon-base><icon-moon /></icon-base>
      <icon-base><icon-write /></icon-base>
      <icon-base><icon-image /></icon-base>
      <icon-base><icon-garbage /></icon-base>
      <icon-base><icon-calendar /></icon-base>
      <icon-base><icon-envelope /></icon-base>
      <br>
      You can use whatever icon you want and keep the base consistent with slots
    </p>
  </section>
</template>

<script>
import IconBase from './IconBase.vue'
import IconEnvelope from './icons/IconEnvelope.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconGarbage from './icons/IconGarbage.vue'
import IconImage from './icons/IconImage.vue'
import IconWrite from './icons/IconWrite.vue'
import IconMoon from './icons/IconMoon.vue'
import IconBox from './icons/IconBox.vue'

export default {
  components: {
    IconBase,
    IconEnvelope,
    IconCalendar,
    IconGarbage,
    IconImage,
    IconWrite,
    IconMoon,
    IconBox
  }
}
</script>

