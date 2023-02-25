<template>
    <div>
        <h1>Hello Takrorlash</h1>
        <div>
            <input type="text" 
            v-bind:placeholder="inputValue"
            v-model="inputModel" 
            >
           <ul>
             <li v-for="(array,index) in newArray" :key="index">{{ array }}
             <button>x</button>
            </li>
         </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputValue:"Bu yerga yozing",
                inputModel:"",
                newArray:["bir","ikki","uch","tort","besh"]
            }
        },
    }
</script>

<style lang="css" scoped>

</style>

























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