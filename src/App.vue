<template>
  <div id="app">
    <main>
      <h1>Sample Vue.js SVG Icon System</h1>
      <app-typography-icon />
      <app-animated-icon />
    </main>
  </div>
</template>

<script>
import AppTypographyIcon from './components/AppTypographyIcon'
import AppAnimatedIcon from './components/AppAnimatedIcon'

export default {
  components: {
    AppTypographyIcon,
    AppAnimatedIcon
  }
}
</script>

<style>
body,
html {
  margin: 0;
}

#app {
  font-family: 'Mukta Malar', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
  background: #f7f7f7;
  width: 100vw;
  height: 100vh;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 800;
}

main {
  width: 800px;
  margin: 0 auto;
  display: table;
}

section {
  padding: 20px;
  margin-top: 10px;
  background: #fff;
  border: 1px solid #eee;
}
</style>
