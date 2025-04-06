<script lang="ts">
import { defineComponent } from 'vue';
import TopNavbar from './TopNavbar.vue';

export default defineComponent({
  name: 'MainContent',
  components: {
    TopNavbar
  }
});
</script>

<template>
  <aside class="sidebar">
    <TopNavbar />
  </aside>
  <main class="content">
    
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  height: 60px;
  background: #1f1f1f;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: fixed;
}

.content {
  background-color: #1f1f1f;
}
</style>