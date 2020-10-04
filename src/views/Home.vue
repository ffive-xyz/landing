<template>
  <div class="home">
    <Welcome />
    <Intro />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Welcome from "@/components/Home/Welcome.vue"; // @ is an alias to /src
import Intro from "@/components/Home/Intro.vue";

@Options({
  components: {
    Welcome,
    Intro
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
