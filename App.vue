<template>
  <div class="app">
    <div
      class="count"
      data-qa="count"
    >
      {{ count }}
    </div>
    <button
      data-qa="decrease button"
      @click="count -= 1"
    >
      -
    </button>
    <button
      data-qa="increase button"
      @click="count += 1"
    >
      +
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: `App`,
  setup() {
    const count = ref(0);
    return { count };
  },
};
</script>

<style>
.app {
  text-align: center;
}

.count {
  font-size: 3em;
}
</style>
