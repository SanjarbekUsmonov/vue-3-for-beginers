<template>
  <div>
      <div id="nav">
        <router-link  to="/">v-bind</router-link>
        <router-link  to="/about">Schotchik</router-link>
      </div>
      <router-view/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style  scoped>
#nav a{
 font-weight: 600;
 margin-left: 20px;
}
</style>