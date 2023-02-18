<template>
  <div>
    <h1>Home v-bind</h1>
    <div class="input">
       <input type="text"  v-bind:placeholder="textInput">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        textInput:"Iltimis bu yerga yozing"
      }
    },
  }
</script>

<style lang="css" scoped>
.input input{
  width: 400px;
  border-block-color: red;
  height: 30px;
}
</style>