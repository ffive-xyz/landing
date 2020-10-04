<template>
  <div class="intro">
    <div class="content">
      <div class="body">
        <p>
          <span>ffive.xyz</span> is an open source community to share ideas,
          inspire and build cool projects.
        </p>

        <a
          href="https://github.com/ffive-xyz"
          target="_blank"
          rel="noopener noreferrer"
          class="call-to-action"
          ><div>
            Community Blogs
          </div>
          <img src="@/assets/github.png" alt=""
        /></a>
        <a
          href="https://github.com/ffive-xyz"
          target="_blank"
          rel="noopener noreferrer"
          class="call-to-action"
          ><div>
            Showcase
          </div>
          <img src="@/assets/github.png" alt=""
        /></a>
        <a
          href="https://github.com/ffive-xyz"
          target="_blank"
          rel="noopener noreferrer"
          class="call-to-action"
          ><div>
            Fork us
          </div>
          <img src="@/assets/github.png" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Intro extends Vue {}
</script>

<style lang="scss" scoped>
.intro {
  @include page;
}
</style>
