<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<!--suppress JSAnnotator -->
<script>
 import Navbar from './components/Navbar';
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

