<template>
  <div id="app">
    <typography />
  </div>
</template>

<script>
import Typography from './components/Typography'

export default {
  components: {
    Typography
  }
}
</script>

<style>
#app {
  font-family: 'Mukta Malar', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-weight: 300;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 800;
}
</style>
