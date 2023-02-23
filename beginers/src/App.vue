<template>
  <div>
      <div id="nav">
        <router-link  to="/">v-bind</router-link>
        <router-link  to="/about">Schotchik</router-link>
        <router-link  to="/input">v-model</router-link>
        <router-link  to="/for">v-for</router-link>
        <router-link  to="/vif">v-if</router-link>
        <router-link  to="/comp">computed</router-link>
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