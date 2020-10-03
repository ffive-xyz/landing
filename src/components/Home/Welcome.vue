<template>
  <div class="welcome">
    <div class="title">
      <h1>ffive.xyz</h1>
      <h3>lets make and run</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Welcome extends Vue {}
</script>

<style lang="scss" scoped>
.welcome {
  height: 100vh;
  display: flex;
  align-items: center;
  .title {
    padding-left: 20px;
    * {
      font-weight: 100;
      line-height: 0;
    }
    h1 {
      color: rgb(143, 67, 214);
      font-size: 5rem;
    }
    h3 {
      color: rgb(216, 216, 216);
      font-size: 2.5rem;
    }
  }
}
</style>
