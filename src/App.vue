<script lang="ts">
import { defineComponent } from 'vue';
import SidebarLeft from '@/components/SidebarLeft.vue';
import MainContent from '@/components/MainContent.vue';

export default defineComponent({
  name: 'App',
  components: {
    SidebarLeft,
    MainContent
  }
});
</script>

<template>
  <div class="app-container">
    <div class="top"></div>
    <aside class="sidebar">
      <SidebarLeft />
    </aside>
    <main class="content">
      <MainContent />
    </main>
  </div>
</template>

<style scoped>
.top {
  padding: 68px;
  position:relative;
  overflow: hidden;
}
.app-container {
  width: 1200px;
  margin: 0 auto;
}

.sidebar {
  max-width: 350px;
  padding: 30px;
  border-radius: 30px;
  border: 1px solid #565656;
  position:fixed;
  left: 20px;
  top:50%;
  transform: translateY(-50%);
  z-index: 10;
}

.content {
  margin-left: auto;
  max-width: 770px;
  background-color: #1f1f1f;
}
</style>
