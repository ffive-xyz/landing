<template>
  <div class="welcome">
    <div class="title">
      <div id="main-heading">ffive.xyz</div>
      <div id="sub-heading">learn and run</div>
    </div>
    <div class="additional"></div>
    <div class="background">
      <img src="@/assets/keyboard.svg" alt="keyboard graphic" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Welcome extends Vue {}
</script>

<style lang="scss" scoped>
.welcome {
  @include landing-page;
}
</style>
