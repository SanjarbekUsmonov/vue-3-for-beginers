<template>
  <div>
    <div>
      <h1>Hello v-if</h1>
    </div>

    <ul v-if ="lorems.length!== 0">
      <li v-for ="(lorem,index) in lorems" v-bind:key="index">
        {{ lorem }}
        <br /><br />
        <button v-on:click="delateBtn(index)">delate</button>
      </li>
    </ul>
    <div v-else>
        djpojfpew
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lorems: ["bir", "ikki", "uch"],
    };
  },
  methods: {
    delateBtn(index) {
      this.lorem.splice(index);
    },
  },
};
</script>

<style scoped>
</style>