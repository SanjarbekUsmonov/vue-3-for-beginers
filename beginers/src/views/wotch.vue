<template>
    <div>
        <h1>Hello wotch</h1>
        <input type="text" 
        :placeholder="inputBind"
        v-model="inputModel"
        @keypress.enter="inputValuePush()"
        > 
        <ul v-if="this.array.length !== 0">
            <li v-for="(newArray,index) in array" :key="index">{{ newArray }} 
            <button @click="arraySpliceIndex(index)">x</button>
           </li>   
        </ul>
        <div v-else>
            Hech narsa qolmadi
        </div>
        {{ numberLenght }} 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputBind:'Bu yerga yozing',
                inputModel:"",
                array:['1','2','3','4','5']
            }
        },
    methods: {
        arraySpliceIndex(index){
            this.array.splice(index,1)
        },
        inputValuePush(){
            this.array.push(this.inputModel)
            this.inputModel=""
        }
    },
    computed:{
        numberLenght(){
            return this.array.length * 1
        }
    },
    watch:{
        inputModel(value){
            // if(value.length === 5){
            //     this.array = []
            // }
            if(value.length === 4){
                this.inputModel = "3 tadan kop mumkin emas"
            }
        }
    }
 }
</script>

<style lang="css" scoped>

</style>