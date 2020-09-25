<template>
  <div>
    {{ message }}
    <div>
      {{ count }}
      <button @click="count++">Increment</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Welcome extends Vue {
  message = "hello";
  count = 0;
}
</script>
