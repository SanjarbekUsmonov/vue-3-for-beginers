<template>
  <div>
    <div>
      <h1>Hello v-for</h1>
    </div>
    
    <div>
      <input type="text" 
      v-model="inputValue" 
      @keypress.enter="addInput()">
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
        raqamlar:["bir","ikki","uch","tort","besh"],
        inputValue:""
    };
  },
  methods: {
    addInput(){
      this.raqamlar.push(this.inputValue)
      this.inputValue = ""
    }
  },
};
</script>

<style scoped>
</style>