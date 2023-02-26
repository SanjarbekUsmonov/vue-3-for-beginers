<template>
  <div>
      <h1>Hello Takrorlash</h1>
      <div>
       <input type="text" 
       :placeholder="inputBind"
        v-model="inputValue"
        @keypress.enter="inputPush()"
      >
      <ul v-if="newArray.length !== 0">
        <li v-for="(array,index) in newArray" :key="index">
          {{ array }} 
          <button class="to" @click="btnSplice(index)">click me</button>
        </li>
      </ul>
      <div v-else>
          Hech narsa qolmaadi
      </div>
      {{ numberArray }}
      </div>
      <div class="button">
        <a href="#" >click me</a>
      </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputBind:"Bu yerga yozing",
        inputValue:"",
        newArray:['bir','ikki','uch','tort']
      }
    },
    methods: {
      btnSplice(index){
        this.newArray.splice(index,1)
      },
      inputPush(){
        this.newArray.push(this.inputValue)
        this.inputValue = ""
      },
    },
    computed:{
      numberArray(){
       return this.newArray.length * 5
      }
    }
  }
</script>

<style lang="css"  scoped>

.button{
  position:relative;
  display:inline-block;
  margin:20px;
}

.button a{
  color:white;
  font-family:Helvetica, sans-serif;
  font-weight:bold;
  font-size:15px;
  text-align: center;
  text-decoration:none;
  background-color: green;
  display:block;
  position:relative;
  padding: 5px 10px;
  
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #00911f;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #0f9100;
  box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #0f9100;
  
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button a:active{
  top:10px;
  background-color: green;
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #0f9100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #0f9100;
  box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #0f9100;
}

.button:after{
  content:"";
  height:100%;
  width:100%;
  padding:4px;
  position: absolute;
  bottom:-15px;
  left:-4px;
  z-index:-1;
  background-color:#2B1800;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
 
</style>





















<!-- <template>
  <div>
    <h1>Hello Takrorlash</h1>
    <div>
      <input
        type="text"
        v-bind:placeholder="inputValue"
        v-model="inputModel"
        @keypress.enter="keypresInput()"
      />
      <ul v-if="newArray.length !== 0">
        <li v-for="(array, index) in newArray" :key="index">
          {{ array }}
          <button @click="clickBtn(index)">x</button>
        </li>
      </ul>
      <div v-else>Hech narsa qolmadi</div>
      {{ numberArray }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "Bu yerga yozing",
      inputModel: "",
      newArray: ["bir", "ikki", "uch", "tort", "besh"],
    };
  },
  methods: {
    clickBtn(index) {
      this.newArray.splice(index, 1);
    },
    keypresInput() {
      this.newArray.push(this.inputModel);
      this.inputModel = "";
    },
  },
  computed: {
    numberArray() {
      return this.newArray.length * 5;
    },
  },
};
</script>

<style lang="css" scoped>
</style> -->

























<!-- <template>
    <div>
        <h1>Hello Takrorlash</h1>
        <div>
            <h1>{{schochik}}</h1>
            <button @click="oldinga()">oldinga</button>
            <button @click="orqaga()">orqaga</button>
        </div>
    </div>
</template>

<script>
 export default {
     data() {
        return {
          schochik: 0  
        }
     },  
     methods: {
        oldinga(){
           if(this.schochik < 10){
            this.schochik++ 
           }
        },
        orqaga(){
           if(this.schochik > 0){
            this.schochik--
           }
        },
     }, 
}
</script>

<style  scoped>

</style> -->