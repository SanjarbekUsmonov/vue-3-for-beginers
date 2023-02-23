<template>
  <div>
    <div>
      <h1>Hello computed</h1>
    </div>

    <div>
      <input type="text" v-model="inputValue" @keypress.enter="addInput()" />
        <ul v-if="raqamlar.length !== 0">
        <li 
         v-for="(raqam,index) in raqamlar" v-bind:key="index">
         {{ raqam }}
        <button @click="addBtn(index)">click</button>
        </li>
      </ul>
      <div v-else>
         Hech narsa qolmadi
      </div>
      <div>
        {{ coolComputed }}
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      raqamlar: ["bir", "ikki", "uch", "tort", "besh"],
      inputValue: "",
    };
  },
  methods: {
    addInput() {
      this.raqamlar.push(this.inputValue);
      this.inputValue = "";
    },
    // addIf(){
    //     this.raqamlar.length =!this.raqamlar
    // },
    addBtn(index){
        this.raqamlar.splice(index,1)
    },
  },
  computed:{
     coolComputed(){
     console.log('coolComputed',this.raqamlar.length * 5);
     return this.raqamlar.length * 5
    }
    }
};
</script>
  
  <style scoped>
</style>