<template>
    <div>
        <div id="#"><h1>Hello v-model</h1></div>
        <div class="input">
            <input type="text" v-model="inputModel"> {{ inputModel }}
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            inputModel:""
          }  
        }
    }
</script>

<style lang="css" scoped>
.input input{
  width: 400px;
  border-block-color: red;
  height: 30px;
}
</style>