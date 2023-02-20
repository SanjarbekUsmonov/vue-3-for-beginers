<template>
  <div>
    <div>
      <h1>Hello v-for</h1>
    </div>
    <div>
        <ul>
            <li v-for="raqam in raqamlar" v-bind:key="raqam">{{ raqam }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        raqamlar:["bir","ikki","uch","tort","besh"]
    };
  },
};
</script>

<style scoped>
</style>