<template>
  <div>
    <h1>Hello chotchi</h1>
    <div>
      <h1>{{ tasbeh }}</h1>
    </div>
    <div>
      <button  @click="orqaga()">Orqaga</button>
      <button  @click="oldinga()">Oldinga</button>
    </div>
    {{ number }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasbeh: 0,
    };
  },
  methods: {
    oldinga() {
     if( this.tasbeh < 10){
        this.tasbeh++
     }
    },
    orqaga() {
     if(this.tasbeh > 0){
        this.tasbeh--
     }
    },
  },
};
</script>

<style  scoped>
button {
  padding: 5px 40px;
}
</style>