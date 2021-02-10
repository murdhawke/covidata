<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
	<h3>This is a test of Github</h3>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  components: { Nav}
}
</script>

<style >
#app {
  padding: 0;
}
h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 28px;
    color: #485e6b;
    text-align: center;
}
</style>
