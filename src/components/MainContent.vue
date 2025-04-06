<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainContent',

});
</script>

<template>
  <main class="content">
    <RouterView />
  </main>
</template>

<style scoped>

.content {
  background-color: #1f1f1f;
}
</style>