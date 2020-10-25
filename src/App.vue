<template>
  <div class="app" :class="theme">
    <div id="nav">
      <!-- <div>
        <router-link to="/">home</router-link> |
        <router-link to="/about">about</router-link>
      </div> -->
      <Auth />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapState } from "vuex";
import Auth from "@/components/Firebase/Auth.vue";

@Options({
  computed: {
    ...mapState(["theme"])
  },
  components: {
    Auth
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
html {
  @include body;
}

#nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px;
  z-index: 100;
  // background: var(--primary-dull-color);
  // border-bottom-left-radius: 30px;

  a {
    font-weight: bold;
    color: var(--font-color);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
