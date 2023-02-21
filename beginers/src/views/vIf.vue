<template>
  <div class="bir">
    <button @click="showText = !showText">Click me</button>

    <div v-if="showText">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet
      corporis ducimus voluptas fugiat culpa sed eaque, rem, ex, quo neque sint
      porro? Dolorem dolorum fugit dignissimos tenetur et cum!
    </div>

    <div v-else>
      hello ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet
      corporis ducimus voluptas fugiat culpa sed eaque, rem, ex, quo neque sint
      porro? Dolorem dolorum fugit dignissimos tenetur et cum!
    </div>

    <div v-show="showText">
      Sanjar ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi
      provident, fugiat harum quam assumenda debitis hic omnis dicta nobis
      voluptas. Repellat blanditiis, laboriosam magni optio dicta laudantium
      accusantium debitis.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: true,
    };
  },
};
</script>

<style  scoped>
.bir {
}
</style>





















<!-- <template>
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
      this.lorems.splice(index);
    },
  },
};
</script>

<style scoped>
</style> -->